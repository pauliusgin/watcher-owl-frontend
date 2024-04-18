import "./GoogleLoginButton.scss";
import { GoogleLogin } from "@react-oauth/google";
import { parseCredentialResponse } from "../../../services/parseCredentials";

function GoogleLoginButton() {
	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				//* this console.log is to be deleted
				console.log("credentials:", credentialResponse);
				const user = parseCredentialResponse(credentialResponse);

				//* this console.log is to be deleted
				console.log("user:", user);
			}}
			onError={() => {
				console.log("Login Failed");
			}}
			useOneTap
			auto_select
			shape="pill"
		/>
	);
}

export { GoogleLoginButton };
