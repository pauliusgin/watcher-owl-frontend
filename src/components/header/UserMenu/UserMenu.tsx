import "./UserMenu.scss";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { OffButton } from "../../shared/OffButton/OffButton";
import { useUser } from "../../../hooks/useUser";

function UserMenu() {
	const { user } = useUser();

	return (
		<div className="user__menu">
			<div className="user__menu_titles">
				<OffButton />
				<h3 className="user__menu_titles-name">{user?.given_name}</h3>
				<p className="user__menu_titles-email">{user?.email}</p>
			</div>
			<p>Tasks</p>
			<LogoutButton />
		</div>
	);
}

export { UserMenu };
