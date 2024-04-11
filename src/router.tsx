import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Home } from "./components/main/HomeContainer/HomeContainer.tsx";
import { Tasks } from "./components/main/TasksContainer/TasksContainer.tsx";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="/" element={<Home />} />
			<Route path="/tasks" element={<Tasks />} />
		</Route>
	)
);
