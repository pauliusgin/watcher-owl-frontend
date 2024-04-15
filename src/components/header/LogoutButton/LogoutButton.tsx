import { useContext } from "react";
import { UserContext } from "../../../context/UserContext.tsx";
// types
import { userContextType } from "../../../types/contextTypes";
import "./LogoutButton.scss";

import { Button } from "../../shared/Button/Button.tsx";

const LogoutButton = () => {
	const { setLoggedIn }: userContextType = useContext(UserContext);

	return (
		<Button
			onClick={() => {
				setLoggedIn(false);
			}}
			className="logout__button button"
			title="Login"
		>
			Atsijungti
		</Button>
	);
};

export { LogoutButton };
