import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/UserContext.tsx";
import { DataContextProvider } from "./context/DataContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<UserContextProvider>
				<DataContextProvider>
					<RouterProvider router={router} />
				</DataContextProvider>
			</UserContextProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>
);
