import "./SettingsPage.scss";
import { DefaultButton } from "../../components/shared/DefaultButton/DefaultButton";
import { deleteUserFromDatabase } from "../../services/user.services";
import { useUser, useAuth } from "../../hooks/custom.hooks";
import { userType } from "../../types/types";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
    const { user, setUser } = useUser();
    const { setToken } = useAuth();

    const navigate = useNavigate();

    function deleteAndLogout(user: userType) {
        if (confirm("Ar tikrai norite ištrinti paskyrą?")) {
            deleteUserFromDatabase(user);

            sessionStorage.clear();
            localStorage.clear();

            setUser(undefined);
            setToken(undefined);

            alert("Paskyra sėkmingai ištrinta.");

            navigate("/");
        }
    }

    return (
        <div className="settings page" id="settings-page">
            <div className="settings__user-info">
                <p className="settings__user-info_name">{`${user?.given_name}`}</p>
                <p className="settings__user-info_email">{`${user?.email}`}</p>
                <img src={user?.picture} alt="User picture" />
            </div>
            <DefaultButton
                className="settings__delete-account-button"
                onClick={() => {
                    if (user) deleteAndLogout(user);
                }}>
                Ištrinti paskyrą.
            </DefaultButton>
        </div>
    );
}

export { SettingsPage };
