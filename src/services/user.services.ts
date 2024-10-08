import { config } from "../../configs/config";
import { userType } from "../types/types";

async function addOrRetrieveUserFromDatabase({
    given_name,
    email,
    picture,
}: userType) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(`${config.backend.server}/api/v1/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ given_name, email, picture }),
        });

        if (!response.ok) throw new Error("Could not contact /api/v1/users");

        const userStatusInTheDatabase = await response.json();

        return userStatusInTheDatabase;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function deleteUserFromDatabase({ email }: userType) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(`${config.backend.server}/api/v1/users`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
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

export { addOrRetrieveUserFromDatabase, deleteUserFromDatabase };
