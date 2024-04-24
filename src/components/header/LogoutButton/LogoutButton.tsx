import "./LogoutButton.scss";
import { googleLogout } from "@react-oauth/google";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton.tsx";
import { useUser } from "../../../hooks/useUser.ts";
import { userType } from "../../../types/types";

const LogoutButton = () => {
	const { setUser } = useUser();

	function logOutUser() {
		googleLogout();

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
			title="Login"
		>
			Atsijungti
		</DefaultButton>
	);
};

export { LogoutButton };
