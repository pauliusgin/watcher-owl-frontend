import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/FooterContainer/FooterContainer";
import { Header } from "../components/header/HeaderContainer/HeaderContainer";

function Root() {
	return (
		<div id="wrapper-root">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export { Root };
