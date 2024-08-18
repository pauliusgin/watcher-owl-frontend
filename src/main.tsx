import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/UserContext.tsx";
import { DataContextProvider } from "./context/DataContext.tsx";
import { TasksContextProvider } from "./context/TaskContext.tsx";
import { RouterWrapper } from "./router.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="1043569609351-a4vs2ihce1ch6kruhro3fkueaguecelc.apps.googleusercontent.com">
            <UserContextProvider>
                <DataContextProvider>
                    <TasksContextProvider>
                        <RouterWrapper />
                    </TasksContextProvider>
                </DataContextProvider>
            </UserContextProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
