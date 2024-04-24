import "./ResultsContainer.scss";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SortingMenu } from "../SortingMenu/SortingMenu";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation";
import { DataContext } from "../../../context/DataContext";
import { dataContextType } from "../../../types/types";

function ResultsContainer() {
	const { searchQuery, data, sessionData, isLoading }: dataContextType =
		useContext(DataContext);

	const location = useLocation();

	if (searchQuery?.length === 0) {
		return <p>{`Užklausą turi sudaryti bent trys raidės`}</p>;
	}

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
						{location.state.sessionName.replaceAll("+", ", ")}
					</span>
				</p>
				<Outlet />
			</div>
		)
	);
}

export { ResultsContainer };
