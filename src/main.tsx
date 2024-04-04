import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UserContextProvider>
			<DataContextProvider>
				<RouterProvider router={router} />
			</DataContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
