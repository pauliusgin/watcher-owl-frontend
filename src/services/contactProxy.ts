import { config } from "../../cfg/config";

async function contactProxy(searchQuery: string[]) {
	try {
		const response = await fetch(`${config.backend.server}/api/proxy`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(searchQuery),
		});

		if (!response.ok) throw new Error("Could not contact proxy.");

		const data = await response.json();

		return data;
	} catch (error) {
		if (error instanceof Error) console.log(error.message);
	}
}

export { contactProxy };
