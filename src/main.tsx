import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UserContextProvider>
			<DataContextProvider>
				<RouterProvider router={App} />
			</DataContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
