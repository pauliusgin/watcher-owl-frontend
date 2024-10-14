const config = {
	backend: {
		server:
			import.meta.env.MODE === "production"
				? "https://watcher-owl-backend.onrender.com"
				: "http://localhost:4000",
	},
};

export { config };
