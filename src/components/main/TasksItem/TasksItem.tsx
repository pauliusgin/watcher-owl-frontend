import "./TasksItem.scss";
import { useTasks } from "../../../hooks/custom.hooks";
import { saveTaskOutput } from "../../../services/tasks.services";

function TasksItem() {
    const { tasks } = useTasks();

    if (tasks && tasks.length > 0) {
        return (
            <>
                {tasks?.map((task: saveTaskOutput) => (
                    <div key={task._id} className="main__tasks_task">
                        <div className="main__tasks_task_item">
                            <div className="main__tasks_task_item-title">
                                <h4 className="main__tasks_task_item-title-text">
                                    {task.search.replaceAll("+", ", ")}
                                </h4>
                            </div>
                            <div className="main__tasks_task_item-thumbnail">
                                <img
                                    src={task?.items?.[0].photo}
                                    alt="thumbnail"
                                />
                            </div>
                        </div>
                        <div className="main__tasks_task_controls">
                            <button>on / off</button>
                            <button>notification</button>
                            <button>delete</button>
                        </div>
                    </div>
                ))}
                <div></div>
            </>
        );
    }
}

export { TasksItem };
