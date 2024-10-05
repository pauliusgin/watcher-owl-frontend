import { Outlet } from "react-router-dom";
import "./TasksPage.scss";

function TasksPage() {
    return (
        <div className="page" id="tasks-page">
            <Outlet />
        </div>
    );
}

export { TasksPage };
