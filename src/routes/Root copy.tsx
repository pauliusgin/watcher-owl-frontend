import { Outlet } from "react-router-dom";
import { Header } from "../components/header/HeaderContainer/HeaderContainer.tsx";
import { Footer } from "../components/footer/FooterContainer/FooterContainer.tsx";

function Root() {
	return (
		<div>
			<div id="wrapper">
				<div id="wrapper__header">
					<Header />
				</div>
				<div id="wrapper__main">
					<Outlet />
				</div>
				<div id="wrapper__footer">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export { Root };
