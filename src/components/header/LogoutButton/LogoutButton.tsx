import "./LogoutButton.scss";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton.tsx";
import { useUser, useAuth } from "../../../hooks/custom.hooks.ts";
import { useState } from "react";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation.tsx";

const LogoutButton = () => {
    const [pageLoading, setPageLoading] = useState<boolean>(false);

    const { setUser } = useUser();
    const { setToken } = useAuth();
    const navigate = useNavigate();

    function logOutUser() {
        try {
            setPageLoading(true);

            googleLogout();

            setToken(undefined);
            localStorage.removeItem("token");

            setUser(undefined);
            localStorage.removeItem("userSession");

            navigate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setPageLoading(false);
        }
    }

    return pageLoading ? (
        <LoadingAnimation />
    ) : (
        <DefaultButton
            onClick={() => logOutUser()}
            className="logout__button button">
            Atsijungti
        </DefaultButton>
    );
};

export { LogoutButton };
