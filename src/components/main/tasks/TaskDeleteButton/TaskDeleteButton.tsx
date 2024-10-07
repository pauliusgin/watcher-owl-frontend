import "./TaskDeleteButton.scss";

import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";
import { deleteTask } from "../../../../services/tasks.services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../../../context/TaskContext";

interface TaskDeleteButtonProps {
    taskId?: string;
}

const TaskDeleteButton = ({ taskId }: TaskDeleteButtonProps) => {
    const { setTasks } = useContext(TaskContext); // Get tasks and setTasks from TaskContext

    const navigate = useNavigate();

    async function handleDeleteTask(taskId: string) {
        try {
            const deleted = await deleteTask(taskId);

            if (deleted?.status === 200) {
                setTasks((prevTasks) =>
                    prevTasks?.filter((task) => task._id !== taskId)
                );

                navigate("/tasks");
            }
        } catch (error) {
            console.log("Failed to delete task", error);
        }
    }

    return (
        <DefaultButton
            onClick={() => {
                if (taskId) {
                    handleDeleteTask(taskId);
                }
            }}
            className="main__tasks_task_controls_delete-button button"
            title="Delete">
            Ištrinti
        </DefaultButton>
    );
};

export { TaskDeleteButton };
