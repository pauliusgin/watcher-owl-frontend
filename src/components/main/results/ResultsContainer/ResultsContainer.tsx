import "./ResultsContainer.scss";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SortingMenu } from "../SortingMenu/SortingMenu";
import { LoadingAnimation } from "../../../shared/LoadingAnimation/LoadingAnimation";
import { useData, useTasks, useAuth } from "../../../../hooks/custom.hooks";
import { TaskSaveButton } from "../../tasks/TaskSaveButton/TaskSaveButton";
import { TaskActivationButton } from "../../tasks/TaskActivationButton/TaskActivationButton";
import { TaskNotificationSelect } from "../../tasks/TaskNotificationSelect/TaskNotificationSelect";
import { TaskDetails } from "../../tasks/TaskItemDetails/TaskItemDetails";
import { useState } from "react";

function ResultsContainer() {
    const { searchQuery, data, sessionData, isLoading } = useData();
    const { saveSuccessful, taskControlsVisibility } = useTasks();
    const { token } = useAuth();

    const [taskDetails, setTaskDetails] = useState<TaskDetails | null>(null);

    const location = useLocation();
    const sessionNameDecoded = decodeURIComponent(location.state.sessionName);

    const handleSaveResult = (result: TaskDetails) => {
        setTaskDetails(result);
    };

    if (isLoading) {
        return <LoadingAnimation />;
    }

    if (data && data.length === 0) {
        return (
            <p className="main__results_no-results">
                {`Pagal užklausą `}
                <span className="main__results_query-span">
                    {searchQuery?.join(", ")}
                </span>
                {` rezultatų nerasta.`}
            </p>
        );
    }

    return (
        data &&
        data.length > 0 && (
            <div className="main__results_container">
                <div className="main__results_sort-container">
                    <SortingMenu />
                </div>
                <p className="main__results_item-query">
                    {`Rodomi naujausi rezultatai (${
                        data === sessionData ? data.length : sessionData?.length
                    }) užklausai:`}
                    <br />
                    <br />
                    <span className="main__results_query-span">
                        {sessionNameDecoded.replaceAll("+", ", ")}
                    </span>
                </p>
                <div className="main__results_save-search_container">
                    {token ? (
                        <>
                            {!taskControlsVisibility && (
                                <TaskSaveButton onSave={handleSaveResult} />
                            )}
                            {saveSuccessful && (
                                <p className="main__results_save-search_container_confirmation">
                                    Paieška išsaugota. Ją peržiūrėti galite
                                    skiltyje
                                    <NavLink
                                        className="main__results_save-search_container_confirmation-link"
                                        to={`/tasks`}>
                                        {` "Paieškos"`}
                                    </NavLink>
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="main__results_save-search_container_login-prompt">
                            Norėdami išsaugoti paiešką, turite
                            <NavLink
                                className="main__results_save-search_container_login-prompt-link"
                                to={`/login`}>
                                {` prisijungti.`}
                            </NavLink>
                        </p>
                    )}
                </div>
                <div className="main__results_task-controls_container">
                    {token && taskControlsVisibility && (
                        <>
                            <TaskActivationButton taskId={taskDetails?._id} />
                            <TaskNotificationSelect taskId={taskDetails?._id} />
                        </>
                    )}
                </div>
                <Outlet />
            </div>
        )
    );
}

export { ResultsContainer };
