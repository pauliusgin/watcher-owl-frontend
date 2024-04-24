import "./GoogleLoginButton.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { userContextType } from "../../../types/types";

function GoogleLoginButton() {
	const { setUser }: userContextType = useContext(UserContext);
	const navigate = useNavigate();

	type JwtPayload = {
		iss: string;
		email_verified: boolean;
		given_name: string;
		email: string;
		sub: string;
		picture: string;
	};

	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				navigate("/");

				if (typeof credentialResponse?.credential === "string") {
					const decodedCredentials = jwtDecode(
						credentialResponse.credential
					) as JwtPayload;
					const { iss, email_verified, given_name, email, sub, picture } =
						decodedCredentials;
					if (
						iss === "https://accounts.google.com" &&
						email_verified === true
					) {
						setUser({
							given_name,
							email,
							Google_ID: sub,
							picture,
							isLoggedIn: true,
						});
					}
				}
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
