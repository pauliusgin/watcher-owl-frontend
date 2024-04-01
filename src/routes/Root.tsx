import { Header } from "../components/header/HeaderContainer/HeaderContainer.tsx";
import { Main } from "../components/main/MainContainer/MainContainer.tsx";
import { Footer } from "../components/footer/FooterContainer/FooterContainer.tsx";

function Root() {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export { Root };
