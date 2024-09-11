import "./TaskDeleteButton.scss";

import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";

const TaskDeleteButton = () => {
    async function handleDeleteTask() {
        console.log("delete button pressed");
    }

    return (
        <DefaultButton
            onClick={() => {
                handleDeleteTask();
            }}
            className="main__tasks_task_controls_delete-button button"
            title="Delete">
            Ištrinti
        </DefaultButton>
    );
};

export { TaskDeleteButton };
