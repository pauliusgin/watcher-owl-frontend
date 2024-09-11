import "./ResultsContainer.scss";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SortingMenu } from "../SortingMenu/SortingMenu";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation";
import { useData, useTasks } from "../../../hooks/custom.hooks";
import { TaskSaveButton } from "../TaskSaveButton/TaskSaveButton";

function ResultsContainer() {
    const { searchQuery, data, sessionData, isLoading } = useData();
    const { saveSuccessful } = useTasks();

    const location = useLocation();
    const sessionNameDecoded = decodeURIComponent(location.state.sessionName);

    if (isLoading) {
        return <LoadingAnimation />;
    }

    if (data && data.length === 0) {
        return (
            <p>
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
                    <span className="main__results_query-span">
                        {sessionNameDecoded.replaceAll("+", ", ")}
                    </span>
                </p>
                <div className="main__results_save-search_container">
                    <TaskSaveButton />
                    {saveSuccessful && (
                        <p className="main__results_save-search_container_confirmation">
                            Paieška išsaugota. Ją peržiūrėti galite skiltyje
                            <NavLink
                                className="main__results_save-search_container_confirmation-link"
                                to={`/tasks`}>
                                {` "Užduotys"`}
                            </NavLink>
                        </p>
                    )}
                </div>
                <Outlet />
            </div>
        )
    );
}

export { ResultsContainer };
