import "./ResultsContainer.scss";
import { Select } from "./Select";
// types
import { TypeResultsContainer } from "../../../types/ResultTypes";

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
					<Select />
				</div>
				<p className="main__results_item-query">
					Rodomi rezultatai užklausai:
					<br />
					<span>{searchQuery?.join(", ")}</span>
				</p>
				{children}
			</div>
		)
	);
}

export { ResultsContainer };
