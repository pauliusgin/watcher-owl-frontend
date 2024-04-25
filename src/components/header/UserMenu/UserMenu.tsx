import "./UserMenu.scss";
import { NavLink } from "react-router-dom";
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
			<div className="user__menu_links">
				<NavLink to="user/settings" className="user__menu_links-settings">
					Nustatymai
					<br />
					<span>(funkcionalumas ruošiamas)</span>
				</NavLink>
			</div>
			<LogoutButton />
		</div>
	);
}

export { UserMenu };
