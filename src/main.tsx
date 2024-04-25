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
		<GoogleOAuthProvider clientId="1043569609351-a4vs2ihce1ch6kruhro3fkueaguecelc.apps.googleusercontent.com">
			<UserContextProvider>
				<DataContextProvider>
					<RouterProvider router={router} />
				</DataContextProvider>
			</UserContextProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>
);
