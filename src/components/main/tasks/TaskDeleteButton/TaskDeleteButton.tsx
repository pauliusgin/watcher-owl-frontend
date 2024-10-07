import "./TaskDeleteButton.scss";

import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";

interface TaskDeleteButtonProps {
    taskId?: string;
}

const TaskDeleteButton = ({ taskId }: TaskDeleteButtonProps) => {
    async function handleDeleteTask(taskId: string) {
        console.log("delete issued for task:", taskId);
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
