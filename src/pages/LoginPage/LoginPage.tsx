import "./LoginPage.scss";
import { GoogleLoginButton } from "../../components/header/GoogleLoginButton/GoogleLoginButton";

//  TODO
function LoginPage() {
	return (
		<div className="page" id="login-page">
			<GoogleLoginButton />
			<p>(funkcionalumas ruošiamas)</p>
		</div>
	);
}

export { LoginPage };
