import "./TaskControlsMenuOffButton.scss";
import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";
import { taskControlsVisibilityType } from "../../../../types/types";

function TaskControlsMenuOffButton({
    toggleTaskControlsVisibility,
    taskId,
}: taskControlsVisibilityType & { taskId: string }) {
    return (
        <DefaultButton
            onClick={() => toggleTaskControlsVisibility(taskId)}
            className="task_controls__menu_off">
            X
        </DefaultButton>
    );
}

export { TaskControlsMenuOffButton };
