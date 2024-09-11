import "./UserMenuButton.scss";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton";
import { useUser } from "../../../hooks/custom.hooks";
import { userMenuVisibilityType } from "../../../types/types";

function UserMenuButton({ toggleUserMenuVisibility }: userMenuVisibilityType) {
    const { user } = useUser();

    return (
        <DefaultButton
            onClick={() => toggleUserMenuVisibility()}
            className="user__menu__button button"
            title={`${user?.email}`}>
            <img
                src={user?.picture}
                alt="User picture"
                className="user__menu__button-picture"
            />
        </DefaultButton>
    );
}

export { UserMenuButton };
