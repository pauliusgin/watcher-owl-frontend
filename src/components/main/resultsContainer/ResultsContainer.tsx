import "./ResultsContainer.scss";
import { SelectSort } from "../SelectSort/SelectSort";
// types
import { TypeResultsContainer } from "../../../types/ResultType";

function ResultsContainer({
	searchQuery,
	data,
	children,
}: TypeResultsContainer) {
	return (
		data &&
		data.length > 0 && (
			<div className="main__results_container">
				<div className="main__results_sort-container">
					<SelectSort />
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
