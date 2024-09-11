import "./TaskActivationButton.scss";

import { DefaultButton } from "../../shared/DefaultButton/DefaultButton";

const TaskActivationButton = () => {
    async function handleToggleTask() {
        console.log("toggle button pressed");
    }

    return (
        <DefaultButton
            onClick={() => {
                handleToggleTask();
            }}
            className="main__tasks_task_controls_activation-button button"
            title="Toggle">
            Įjungti
        </DefaultButton>
    );
};

export { TaskActivationButton };
