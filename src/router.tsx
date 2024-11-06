import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { TasksPage } from "./pages/TasksPage/TasksPage.tsx";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage.tsx";
import { ResultsContainer } from "./components/main/results/ResultsContainer/ResultsContainer.tsx";
import { ResultsItem } from "./components/main/results/ResultsItem/ResultsItem.tsx";
import { TaskContainer } from "./components/main/tasks/TaskContainer/TaskContainer.tsx";
import { TaskItemDetails } from "./components/main/tasks/TaskItemDetails/TaskItemDetails.tsx";
import { useAuth } from "./hooks/custom.hooks.ts";
import { useEffect, useState } from "react";
import { LoadingAnimation } from "./components/shared/LoadingAnimation/LoadingAnimation.tsx";

const RouterWrapper = () => {
    const { token } = useAuth();

    const [pageLoading, setPageLoading] = useState<boolean>(true);

    useEffect(() => {
        const localToken = localStorage.getItem("token");

        if (!localToken) {
            setPageLoading(false);
        }

        if (localToken || token) {
            setPageLoading(false);
        }
    }, [token]);

    if (pageLoading) {
        return <LoadingAnimation />;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
                <Route path="/" element={<HomePage />}>
                    <Route
                        path="/results"
                        element={<ResultsContainer />}
                        errorElement={<div></div>}>
                        <Route path="/results/*" element={<ResultsItem />} />
                    </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
                {token && (
                    <Route path="/tasks" element={<TasksPage />}>
                        <Route index element={<TaskContainer />} />
                        <Route
                            path="/tasks/:id"
                            element={<TaskItemDetails />}
                        />
                    </Route>
                )}
                {token && <Route path="/settings" element={<SettingsPage />} />}
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export { RouterWrapper };
