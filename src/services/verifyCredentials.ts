import { CredentialResponse } from "@react-oauth/google";

async function verifyCredentialResponse(response: CredentialResponse) {
	try {
		const verify = await fetch("http://localhost/4000/api/login/google", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ credential: response.credential }),
		});

		if (!verify.ok)
			throw new Error("Failed to connect to server for verification.");

		const verified = await verify.json();
		console.log("verification result:", verified);
	} catch (err) {
		if (err instanceof Error) {
			console.log("Parser error:", err.message);
		}
	}
}

export { verifyCredentialResponse };
