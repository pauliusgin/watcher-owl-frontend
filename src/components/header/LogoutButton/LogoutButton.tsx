import "./LogoutButton.scss";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton.tsx";
import { useUser } from "../../../hooks/custom.hooks.ts";
import { userType } from "../../../types/types";

const LogoutButton = () => {
	const { setUser } = useUser();
	const navigate = useNavigate();

	function logOutUser() {
		googleLogout();
		navigate("/");

		setUser((prev) => {
			return {
				...prev,
				isLoggedIn: false,
			} as userType;
		});
	}

	return (
		<DefaultButton
			onClick={() => logOutUser()}
			className="logout__button button"
		>
			Atsijungti
		</DefaultButton>
	);
};

export { LogoutButton };
