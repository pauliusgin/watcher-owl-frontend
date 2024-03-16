import "./HeaderContainer.scss";

import { LoginButton } from "../LoginButton/LoginButton.tsx";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav" role="navigation">
				<LoginButton />
			</nav>
		</header>
	);
};

export { Header };
