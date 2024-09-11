import "./UserMenu.scss";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { UserMenuOffButton } from "../UserMenuOffButton/UserMenuOffButton";
import { useUser } from "../../../hooks/custom.hooks";

function UserMenu() {
    const { user } = useUser();

    return (
        <div className="user__menu">
            <div className="user__menu_titles">
                <UserMenuOffButton />
                <h3 className="user__menu_titles-name">{user?.given_name}</h3>
                <p className="user__menu_titles-email">{user?.email}</p>
            </div>
            <div className="user__menu_links">
                <NavLink to={`/settings`} className="user__menu_links-settings">
                    Nustatymai
                </NavLink>
            </div>
            <LogoutButton />
        </div>
    );
}

export { UserMenu };
