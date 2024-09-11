import "./TaskControlsMenu.scss";
import { TaskControlsMenuOffButton } from "../TaskControlsMenuOffButton/TaskControlsMenuOffButton";
import { TaskDeleteButton } from "../TaskDeleteButton/TaskDeleteButton";
import { TaskActivationButton } from "../TaskActivationButton/TaskActivationButton";
import { taskControlsVisibilityType } from "../../../types/types";

function TaskControlsMenu({
    toggleTaskControlsVisibility,
    taskId,
}: taskControlsVisibilityType & { taskId: string }) {
    return (
        <div className="task_controls__menu">
            <TaskControlsMenuOffButton
                toggleTaskControlsVisibility={toggleTaskControlsVisibility}
                taskId={taskId}
            />
            <TaskActivationButton />
            <TaskDeleteButton />
            <TaskDeleteButton />
        </div>
    );
}

export { TaskControlsMenu };
