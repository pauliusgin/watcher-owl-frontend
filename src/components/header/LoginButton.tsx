import "./LoginButton.scss";

import { Button } from "../shared/Button.tsx";
import { loginAction } from "../../utils/loginUtils.ts";

const LoginButton = () => {
	return (
		<Button
			onClick={loginAction}
			className="login__button button"
			title="Login"
		>
			Prisijungti
		</Button>
	);
};

export { LoginButton };
