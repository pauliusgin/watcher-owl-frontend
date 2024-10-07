import "./TaskControlsToggleButton.scss";
import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";
import { taskControlsVisibilityType } from "../../../../types/types";

const TaskControlsToggleButton = ({
    toggleTaskControlsVisibility,
    taskId,
}: taskControlsVisibilityType & { taskId: string }) => {
    return (
        <DefaultButton
            onClick={() => toggleTaskControlsVisibility(taskId)}
            className="main__tasks_task_controls_controls-button button"
            title="Nustatymai">
            Nustatymai
        </DefaultButton>
    );
};

export { TaskControlsToggleButton };
