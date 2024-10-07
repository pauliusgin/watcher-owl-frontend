import "./TaskActivationButton.scss";
import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";
import { getTaskById } from "../../../../services/tasks.services";
import { toggleTaskActivity } from "../../../../services/tasks.services";
import { useEffect, useState } from "react";

interface TaskActivationButtonProps {
    taskId?: string;
}

const TaskActivationButton = ({ taskId }: TaskActivationButtonProps) => {
    const [taskStatus, setTaskStatus] = useState<boolean>(false);

    useEffect(() => {
        async function fetchTaskStatus() {
            if (taskId) {
                const task = await getTaskById(taskId);

                setTaskStatus(task.isActive);
            }
        }
        fetchTaskStatus();
    }, [taskId]);

    async function handleToggleTask(taskId: string) {
        setTaskStatus((prevStatus) => !prevStatus);

        try {
            await toggleTaskActivity(taskId, !taskStatus);

            const updatedTask = await getTaskById(taskId);

            setTaskStatus(updatedTask.isActive);
        } catch (error) {
            setTaskStatus((prevStatus) => !prevStatus);
            console.error("Failed to change task status:", error);
        }
    }

    return (
        <DefaultButton
            onClick={() => {
                if (taskId) {
                    handleToggleTask(taskId);
                }
            }}
            className="main__tasks_task_controls_activation-button button"
            title="Toggle">
            {taskStatus ? "Įjungta" : "Išjungta"}
        </DefaultButton>
    );
};

export { TaskActivationButton };
