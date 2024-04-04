import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { Tasks } from "./components/main/TasksContainer/TasksContainer.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Home } from "./components/main/HomeContainer/HomeContainer.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/tasks",
				element: <Tasks />,
			},
		],
	},
]);
