import "./LoginPage.scss";
import { GoogleLoginButton } from "../../components/header/GoogleLoginButton/GoogleLoginButton";
import { LogoutButton } from "../../components/header/LogoutButton/LogoutButton";
import { useUser } from "../../hooks/useUser";

//  TODO
function LoginPage() {
	const { user } = useUser();

	return (
		<div className="page" id="login-page">
			{(user?.isLoggedIn === false || !user) && <GoogleLoginButton />}
			{user?.isLoggedIn === true && <LogoutButton />}
			<p>(funkcionalumas ruošiamas)</p>
		</div>
	);
}

export { LoginPage };
