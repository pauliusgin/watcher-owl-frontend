import "./HeaderContainer.scss";
// import { NavLink } from "react-router-dom";

// import { LoginButton } from "../LoginButton/LoginButton.tsx";
// import { LogoutButton } from "../LogoutButton/LoginButton.tsx";

const Header = () => {
	return (
		<header className="header">
			<div className="header__placeholder">This is a header.</div>
			{/* <nav className="header__nav" role="navigation">
				<ul className="header__nav__list">
					<li className="header__nav__list-item">
						<NavLink to="/">Pagrindinis</NavLink>
					</li>
					<li className="header__nav__list-item">
						<NavLink to="/tasks">Užduotys</NavLink>
					</li>
					<li className="header__nav__list-item">
						<LogoutButton />
					</li>
					<li className="header__nav__list-item">
						<LoginButton />
					</li>
				</ul>
			</nav> */}
		</header>
	);
};

export { Header };
