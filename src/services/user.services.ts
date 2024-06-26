import { config } from "../../configs/config";
import { userType } from "../types/types";

async function addUserToDatabase(user: userType) {
	try {
		const response = await fetch(`${config.backend.server}/api/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		if (!response.ok) throw new Error("Could not contact /api/users");

		const userStatusInTheDatabase = await response.json();

		return userStatusInTheDatabase;
	} catch (error) {
		if (error instanceof Error)
			console.log("Failed to send request to api/users", error.message);
	}
}

async function deleteUserFromDatabase(user: userType) {
	try {
		const response = await fetch(`${config.backend.server}/api/users`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		if (!response.ok) throw new Error("Could not contact /api/users");

		const deletedUser = await response.json();

		return deletedUser;
	} catch (error) {
		if (error instanceof Error)
			console.log("Failed to send request to api/users", error.message);
	}
}

export { addUserToDatabase, deleteUserFromDatabase };
