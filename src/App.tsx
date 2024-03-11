import "./App.scss";
import { Header } from "./components/header/HeaderContainer/HeaderContainer.tsx";
import { Main } from "./components/main/MainContainer/MainContainer.tsx";
import { Footer } from "./components/footer/FooterContainer/FooterContainer.tsx";

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
