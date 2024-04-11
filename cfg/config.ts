const config = {
	backend: {
		server:
			import.meta.env.MODE === "production"
				? "https://watcher-owl-backend.vercel.app"
				: "http://localhost:4000",
	},
};

export { config };
