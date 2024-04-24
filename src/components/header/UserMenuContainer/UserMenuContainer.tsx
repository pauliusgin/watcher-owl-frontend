import "./UserMenuContainer.scss";
import { UserMenuButton } from "../UserMenuButton/UserMenuButton.tsx";
import { UserMenu } from "../UserMenu/UserMenu.tsx";
import { useUser } from "../../../hooks/useUser.ts";

const UserMenuContainer = () => {
	const { userMenuVisibility, setUserMenuVisibility } = useUser();

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
