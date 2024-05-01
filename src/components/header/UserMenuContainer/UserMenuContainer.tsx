import "./UserMenuContainer.scss";
import { UserMenuButton } from "../UserMenuButton/UserMenuButton.tsx";
import { UserMenu } from "../UserMenu/UserMenu.tsx";
import { useUser } from "../../../hooks/useUser.ts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const UserMenuContainer = () => {
	const { userMenuVisibility, setUserMenuVisibility } = useUser();
	const location = useLocation();

	useEffect(() => {
		setUserMenuVisibility(false);
	}, [location.pathname, setUserMenuVisibility]);

	function toggleUserMenuVisibility() {
		setUserMenuVisibility((prevVisibility) => !prevVisibility);
	}

	return (
		<div className="user__menu__container">
			<UserMenuButton toggleUserMenuVisibility={toggleUserMenuVisibility} />
			{userMenuVisibility === true && <UserMenu />}
		</div>
	);
};

export { UserMenuContainer };
