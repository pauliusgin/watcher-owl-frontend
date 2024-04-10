import { useContext } from "react";
import { UserContext } from "../../../context/UserContext.tsx";
// types
import { userContextType } from "../../../types/contextTypes";
import "./LoginButton.scss";

import { Button } from "../../shared/Button/Button.tsx";

const LoginButton = () => {
	const { setLoggedIn }: userContextType = useContext(UserContext);

	return (
		<Button
			onClick={() => {
				setLoggedIn(true);
			}}
			className="login__button button"
			title="Login"
		>
			Prisijungti
		</Button>
	);
};

export { LoginButton };
