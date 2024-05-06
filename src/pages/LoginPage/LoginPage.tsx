import "./LoginPage.scss";
import { GoogleLoginButton } from "../../components/header/GoogleLoginButton/GoogleLoginButton";
import { useUser } from "../../hooks/custom.hooks";

function LoginPage() {
	const { user } = useUser();

	return (
		<div className="page" id="login-page">
			{(user?.isLoggedIn === false || !user) && <GoogleLoginButton />}
		</div>
	);
}

export { LoginPage };
