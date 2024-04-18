import "./GoogleLoginButton.scss";
import { Button } from "../../shared/Button/Button";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
	const googleLogin = useGoogleLogin({
		flow: "auth-code",
		ux_mode: "redirect",
		redirect_uri: "http://localhost:1337",

		onSuccess: async function (codeResponse) {
			console.log("code response", codeResponse);
			const response = await fetch("http://localhost:4000/auth/google", {
				method: "post",
				body: JSON.stringify({ code: codeResponse.code }),
			});

			//* This should be received from the backend
			const tokens = await response.json();
			console.log(tokens);
		},
		onError: async function (errorResponse) {
			console.log("Failed to log in with google:", errorResponse);
		},
	});

	return (
		<Button
			onClick={() => {
				googleLogin();
			}}
			className="button google__login-button"
			title="Login"
		>
			Prisijungti su Google
		</Button>
	);
}

export { GoogleLoginButton };
