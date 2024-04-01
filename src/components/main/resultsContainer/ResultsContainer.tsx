import "./ResultsContainer.scss";
import { SortingMenu } from "../SortingMenu/SortingMenu";

// types
import { resultsContainerType } from "../../../types/resultsDataTypes";

function ResultsContainer({
	searchQuery,
	data,
	children,
}: resultsContainerType) {
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
					<span>{searchQuery?.join(", ")}</span>
				</p>
				{children}
			</div>
		)
	);
}

export { ResultsContainer };
