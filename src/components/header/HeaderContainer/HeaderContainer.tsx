import "./HeaderContainer.scss";
import { NavLink } from "react-router-dom";
import { UserMenuContainer } from "../UserMenuContainer/UserMenuContainer";
import { useUser } from "../../../hooks/useUser";

const Header = () => {
	const { user } = useUser();

	return (
		<header className="header">
			<nav className="header__nav" role="navigation">
				<ul className="header__nav__list">
					<li className="header__nav__list-item">
						<NavLink to="/">Pagrindinis</NavLink>
					</li>
					<li className="header__nav__list-item">
						{(!user || user.isLoggedIn === false) && (
							<NavLink to="/login">Prisijungti</NavLink>
						)}
					</li>
					<li className="header__nav__list-item">
						{user?.isLoggedIn && <UserMenuContainer />}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
