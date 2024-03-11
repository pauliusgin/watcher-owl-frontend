import "./HeaderContainer.scss";

import { LoginButton } from "../LoginButton/LoginButton.tsx";
import { HistoryInfoButton } from "../HistoryInfoButton/HistoryInfoButton.tsx";
import { UserAccountButton } from "../UserAccountButton/UserAccountButton.tsx";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav" role="navigation">
				<HistoryInfoButton />
				<UserAccountButton />
				<LoginButton />
			</nav>
		</header>
	);
};

export { Header };
