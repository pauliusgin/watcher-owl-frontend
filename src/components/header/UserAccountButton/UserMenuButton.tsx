import "./UserMenuButton.scss";
import { Button } from "../../shared/Button/Button.tsx";
import { userMenuAction } from "../../../utils/userMenuUtils.ts";

const UserMenuButton = () => {
	return (
		<Button
			onClick={userMenuAction}
			className="user__menu_button button"
			title="User menu"
		>
			Paskyra
		</Button>
	);
};

export { UserMenuButton };
