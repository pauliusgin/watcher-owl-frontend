import "./ErrorPage.scss";
import { useRouteError, ErrorResponse } from "react-router-dom";

export function ErrorPage() {
	const error = useRouteError() as ErrorResponse;
	console.error(error);

	return (
		<div className="page" id="error-page">
			<h2>{`${error.status}: ${error.statusText}`}</h2>
			<p>{`${error.data}`}</p>
		</div>
	);
}
