import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function ProtectedRoute() {
	const { user } = useUser();

	if (user?.isLoggedIn) {
		return <Outlet />;
	} else {
		return <Navigate to="/login" replace={true} />;
	}
}

export { ProtectedRoute };
