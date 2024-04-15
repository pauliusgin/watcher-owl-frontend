import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { TasksPage } from "./pages/TasksPage/TasksPage.tsx";
import { ResultsContainer } from "./components/main/ResultsContainer/ResultsContainer.tsx";
import { ResultsItem } from "./components/main/ResultsItem/ResultsItem.tsx";

const App = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="/" element={<HomePage />}>
				<Route path="/results" element={<ResultsContainer />}>
					<Route path="/results/*" element={<ResultsItem />} />
				</Route>
			</Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/tasks" element={<TasksPage />} />
		</Route>
	)
);

export { App };
