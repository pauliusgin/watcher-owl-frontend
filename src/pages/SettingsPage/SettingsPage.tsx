import "./SettingsPage.scss";
import { DefaultButton } from "../../components/shared/DefaultButton/DefaultButton";
import { deleteUserFromDatabase } from "../../services/user.services";
import { useUser } from "../../hooks/useUser";
import { userType } from "../../types/types";

function SettingsPage() {
	const { user, setUser } = useUser();

	function deleteAndLogout(user: userType) {
		if (confirm("Ar tikrai norite ištrinti paskyrą?")) {
			deleteUserFromDatabase(user);

			sessionStorage.removeItem("userSession");

			setUser(undefined);

			alert("Paskyra sėkmingai ištrinta.");
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
				}}
			>
				Ištrinti paskyrą.
			</DefaultButton>
		</div>
	);
}

export { SettingsPage };
