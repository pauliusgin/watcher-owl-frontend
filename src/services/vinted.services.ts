import { config } from "../../configs/config";

async function contactVinted(searchQuery: string[]) {
	try {
		const response = await fetch(`${config.backend.server}/api/v1/vinted`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(searchQuery),
		});

		if (!response.ok) throw new Error("Could not contact api/vinted.");

		const data = await response.json();

		return data;
	} catch (error) {
		if (error instanceof Error) console.log(error.message);
	}
}

export { contactVinted };
