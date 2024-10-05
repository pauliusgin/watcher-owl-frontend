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
// import { ProtectedRoute } from "./routes/ProtectedRoute.tsx";

const RouterWrapper = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
                <Route path="/" element={<HomePage />}>
                    <Route path="/results" element={<ResultsContainer />} errorElement={<div></div>}>
                        <Route path="/results/*" element={<ResultsItem />} />
                    </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
                {/* <Route element={<ProtectedRoute />}> */}
                <Route path="/tasks" element={<TasksPage />} >
                    <Route index element={<TaskContainer />} />
                    <Route path="/tasks/:id" element={<TaskItemDetails />} />
                </Route>
                <Route path="/settings" element={<SettingsPage />} />
                {/* </Route> */}
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export { RouterWrapper };
