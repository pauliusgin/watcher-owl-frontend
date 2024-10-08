import "./TaskContainer.scss";
import { useTasks } from "../../../../hooks/custom.hooks";
import { LoadingAnimation } from "../../../shared/LoadingAnimation/LoadingAnimation";
import { TaskItem } from "../TaskItem/TaskItem";

function TaskContainer() {
    const { tasks, tasksLoading } = useTasks();

    if (tasksLoading) {
        return <LoadingAnimation />;
    }

    if (tasks && tasks.length === 0) {
        return (
            <p className="main__tasks_no-tasks-message">
                Jūs neturite jokių išsaugotų paieškų.
            </p>
        );
    }

    if (tasks && tasks.length > 0) {
        return (
            <div className="main__tasks_container">
                <TaskItem />
            </div>
        );
    }
}

export { TaskContainer };
