import "./ResultsContainer.scss";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { SortingMenu } from "../SortingMenu/SortingMenu";
import { LoadingAnimation } from "../../shared/LoadingAnimation/LoadingAnimation";
import { DataContext } from "../../../context/DataContext";
// types
import { dataContextType } from "../../../types/contextTypes";

function ResultsContainer() {
	const { searchQuery, data, isLoading }: dataContextType =
		useContext(DataContext);

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
					{`Rodomi rezultatai (${data.length}) užklausai:`}
					<br />
					<span className="main__results_query-span">
						{searchQuery?.join(", ")}
					</span>
				</p>
				<Outlet />
			</div>
		)
	);
}

export { ResultsContainer };
