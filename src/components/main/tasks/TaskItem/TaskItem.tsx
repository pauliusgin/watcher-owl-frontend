import "./TaskItem.scss";
import { useTasks } from "../../../../hooks/custom.hooks";
import { saveTaskOutput } from "../../../../services/tasks.services";
import { NavLink } from "react-router-dom";

function TaskItem() {
    const { tasks } = useTasks();

    if (tasks && tasks.length > 0) {
        return (
            <>
                {tasks?.map((task: saveTaskOutput) => (
                    <div key={task._id} className="main__tasks_task">
                        <div className="main__tasks_task_item">
                            <div className="main__tasks_task_item-title">
                                <NavLink
                                    className="main__tasks_task_item-nav-link"
                                    to={`/tasks/${task._id}`}>
                                    <h4 className="main__tasks_task_item-title-text">
                                        {task.search.split("+").length > 3
                                            ? task.search
                                                  .split("+")
                                                  .slice(0, 3)
                                                  .join("+")
                                                  .replaceAll("+", ", ")
                                            : task.search.replaceAll("+", ", ")}
                                    </h4>
                                </NavLink>
                            </div>
                            <div className="main__tasks_task_item-thumbnail">
                                <a
                                    className="main__tasks_task_item-thumbnail-link"
                                    href={String(
                                        task?.items?.[0].full_size_url
                                    )}
                                    target="_blank">
                                    <img
                                        src={task?.items?.[0].photo}
                                        alt="thumbnail"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export { TaskItem };
