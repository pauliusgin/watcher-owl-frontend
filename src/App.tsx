import "./App.scss";
import { Header } from "./components/header/Header.tsx";
import { Main } from "./components/main/MainContainer.tsx";
import { Footer } from "./components/footer/Footer.tsx";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
