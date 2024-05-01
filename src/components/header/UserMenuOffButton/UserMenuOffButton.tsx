import "./UserMenuOffButton.scss";
import { useUser } from "../../../hooks/useUser";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton";

function UserMenuOffButton() {
	const { setUserMenuVisibility } = useUser();

	function turnUserMenuVisibilityOff() {
		setUserMenuVisibility(false);
	}

	return (
		<DefaultButton
			onClick={turnUserMenuVisibilityOff}
			className="user__menu_off"
		>
			X
		</DefaultButton>
	);
}

export { UserMenuOffButton };
