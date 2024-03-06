import "./Header.scss";

import { LoginButton } from "./LoginButton.tsx";
import { HistoryInfoButton } from "./HistoryInfoButton.tsx";
import { UserAccountButton } from "./UserAccountButton.tsx";

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
