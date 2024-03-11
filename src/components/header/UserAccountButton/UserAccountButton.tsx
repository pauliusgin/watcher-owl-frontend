import "./UserAccountButton.scss";
import { Button } from "../../shared/Button.tsx";
import { userAccountAction } from "../../../utils/userAccountUtils.ts";

const UserAccountButton = () => {
	return (
		<Button
			onClick={userAccountAction}
			className="user__account_button button"
			title="User account"
		>
			Paskyra
		</Button>
	);
};

export { UserAccountButton };
