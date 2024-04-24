import "./LoginButton.scss";

import { DefaultButton } from "../../shared/DefaultButton/DefaultButton.tsx";

const LoginButton = () => {
	return (
		<DefaultButton
			onClick={() => {}}
			className="login__button button"
			title="Login"
		>
			Prisijungti
		</DefaultButton>
	);
};

export { LoginButton };
