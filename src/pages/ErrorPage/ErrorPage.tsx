import { useEffect } from "react";
import "./ErrorPage.scss";
import { useRouteError, ErrorResponse, useNavigate } from "react-router-dom";
import { LoadingAnimation } from "../../components/shared/LoadingAnimation/LoadingAnimation";

export function ErrorPage() {
    const error = useRouteError() as ErrorResponse;

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="page" id="error-page">
            <h2>{`${error.status}: ${error.statusText}`}</h2>
            <p>{`${error.data}`}</p>
            <p></p>
            <p>Redirecting to main page...</p>
            <LoadingAnimation />
        </div>
    );
}
