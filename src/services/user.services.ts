import { config } from "../../configs/config";
import { userType } from "../types/types";

async function addUserToDatabase({ email, password }: userType) {
	try {
		const response = await fetch(`${config.backend.server}/api/v1/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) throw new Error("Could not contact /api/v1/users");

		const userStatusInTheDatabase = await response.json();

		return userStatusInTheDatabase;
	} catch (error) {
		if (error instanceof Error)
			console.log("Failed to send request to api/users", error.message);
	}
}

async function deleteUserFromDatabase({ email }: userType) {
	try {
		const response = await fetch(`${config.backend.server}/api/v1/users`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		if (!response.ok) throw new Error("Could not contact /api/v1/users");

		const deletedUser = await response.json();

		return deletedUser;
	} catch (error) {
		if (error instanceof Error)
			console.log("Failed to send request to api/users", error.message);
	}
}

export { addUserToDatabase, deleteUserFromDatabase };
