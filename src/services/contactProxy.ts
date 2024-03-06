async function contactProxy(searchQuery: string[]) {
	try {
		const response = await fetch("http://localhost:3000/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(searchQuery),
		});

		if (!response.ok) throw new Error("Could not contact proxy.");

		console.log(
			"what is being sent to the server",
			JSON.stringify(searchQuery)
		);
		const data = await response.json();

		console.log("what returns from the server:", data);
		return data;
	} catch (error) {
		if (error instanceof Error) console.log(error.message);
	}
}

export { contactProxy };
