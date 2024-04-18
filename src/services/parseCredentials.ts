import { CredentialResponse } from "@react-oauth/google";

async function parseCredentialResponse(credentialResponse: CredentialResponse) {
	try {
		const parse = await fetch("http://localhost/4000/api/login/google", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentialResponse),
		});
		if (!parse.ok) throw new Error("Failed to connect to parser.");

		const parsed = await parse.json();

		//* this console.log is to be deleted
		console.log("parsed data:", parsed);
		return parsed;
	} catch (err) {
		if (err instanceof Error) {
			console.log("Parser error:", err.message);
		}
	}
}

export { parseCredentialResponse };
