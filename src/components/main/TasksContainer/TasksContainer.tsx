import "./TasksContainer.scss";
import { useTasks } from "../../../hooks/custom.hooks";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation";
import { TasksItem } from "../TasksItem/TasksItem";

function TasksContainer() {
    const { tasks, tasksLoading } = useTasks();

    if (tasksLoading) {
        return <LoadingAnimation />;
    }

    if (tasks && tasks.length === 0) {
        return (
            <p className="main__tasks_no-tasks-message">
                Jūs neturite jokių užduočių
            </p>
        );
    }

    if (tasks && tasks.length > 0) {
        return (
            <div className="main__tasks_container">
                <TasksItem />
            </div>
        );
    }
}

export { TasksContainer };
