import "./TasksItem.scss";
import { useTasks } from "../../../hooks/custom.hooks";
import { saveTaskOutput } from "../../../services/tasks.services";
import { TaskControlsToggleButton } from "../TaskControlsToggleButton/TaskControlsToggleButton";
import { TaskControlsMenu } from "../TaskControlsMenu/TaskControlsMenu";
import { TaskActivationButton } from "../TaskActivationButton/TaskActivationButton";
import { TaskDeleteButton } from "../TaskDeleteButton/TaskDeleteButton";
import { NavLink } from "react-router-dom";

function TasksItem() {
    const { tasks, taskControlsVisibility, setTaskControlsVisibility } =
        useTasks();

    function toggleTaskControlsVisibility(taskId: string) {
        setTaskControlsVisibility((prevVisibility) => ({
            ...prevVisibility,
            [taskId]: !prevVisibility[taskId],
        }));
    }

    if (tasks && tasks.length > 0) {
        return (
            <>
                {tasks?.map((task: saveTaskOutput) => (
                    <div key={task._id} className="main__tasks_task">
                        <div className="main__tasks_task_item">
                            <div className="main__tasks_task_item-title">
                                <NavLink
                                    className="main__tasks_task_item-nav-link"
                                    to="#">
                                    <h4 className="main__tasks_task_item-title-text">
                                        {task.search.replaceAll("+", ", ")}
                                    </h4>
                                </NavLink>
                            </div>
                            <div className="main__tasks_task_item-thumbnail">
                                <NavLink
                                    className="main__tasks_task_item-thumbnail-link"
                                    to="#">
                                    <img
                                        src={task?.items?.[0].photo}
                                        alt="thumbnail"
                                    />
                                </NavLink>
                            </div>
                        </div>
                        <div className="main__tasks_task_controls">
                            {!taskControlsVisibility[task._id] && (
                                <TaskControlsToggleButton
                                    toggleTaskControlsVisibility={
                                        toggleTaskControlsVisibility
                                    }
                                    taskId={task._id}
                                />
                            )}
                            {taskControlsVisibility[task._id] && (
                                <TaskControlsMenu
                                    toggleTaskControlsVisibility={
                                        toggleTaskControlsVisibility
                                    }
                                    taskId={task._id}
                                />
                            )}
                            <TaskActivationButton />
                            <TaskDeleteButton />
                            <TaskDeleteButton />
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export { TasksItem };
