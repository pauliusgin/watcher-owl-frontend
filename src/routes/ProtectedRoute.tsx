import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/custom.hooks";

function ProtectedRoute() {
    const { user } = useUser();

    // TODO fix this
    if (user) {
        console.log("user:", user);
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace={true} />;
    }
}

export { ProtectedRoute };
