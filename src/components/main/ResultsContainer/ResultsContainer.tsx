import "./ResultsContainer.scss";
import { Outlet, useLocation } from "react-router-dom";
import { SortingMenu } from "../SortingMenu/SortingMenu";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation";
import { useData } from "../../../hooks/custom.hooks";

function ResultsContainer() {
	const { searchQuery, data, sessionData, isLoading } = useData();

	const location = useLocation();
	const sessionNameDecoded = decodeURIComponent(location.state.sessionName);

	if (isLoading) {
		return <LoadingAnimation />;
	}

	if (data && data.length === 0) {
		return (
			<p>
				{`Pagal užklausą `}
				<span className="main__results_query-span">
					{searchQuery?.join(", ")}
				</span>
				{` rezultatų nerasta.`}
			</p>
		);
	}

	return (
		data &&
		data.length > 0 && (
			<div className="main__results_container">
				<div className="main__results_sort-container">
					<SortingMenu />
				</div>
				<p className="main__results_item-query">
					{`Rodomi rezultatai (${
						data === sessionData ? data.length : sessionData?.length
					}) užklausai:`}
					<br />
					<span className="main__results_query-span">
						{sessionNameDecoded.replaceAll("+", ", ")}
					</span>
				</p>
				<Outlet />
			</div>
		)
	);
}

export { ResultsContainer };
