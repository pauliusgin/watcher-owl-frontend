import "./TasksPage.scss";
import { TasksContainer } from "../../components/main/tasks/TasksContainer/TasksContainer";

function TasksPage() {
    return (
        <div className="page" id="tasks-page">
            <TasksContainer />
        </div>
    );
}

export { TasksPage };
