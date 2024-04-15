import "./SortingMenu.scss";
import { useContext, ChangeEvent } from "react";
import { DataContext } from "../../../context/DataContext";
import { sortingItems } from "../../../utils/sortingUtils";

function SortingMenu() {
	const { data, setData, sessionData, setSessionData } =
		useContext(DataContext);

	function handleSortingItems(event: ChangeEvent<HTMLSelectElement>) {
		const sortValue = event.target.value;
		//* this comment is to be deleted
		// console.log("Sorting by:", sortValue);

		if (data) {
			const sortedItems = sortingItems(data, sortValue);
			setData(sortedItems);
		}

		if (sessionData) {
			const sortedItems = sortingItems(sessionData, sortValue);
			setSessionData(sortedItems);
		}
	}

	return (
		<>
			<label className="main__results_sort-label" htmlFor="sorting">
				{`Rikiuoti pagal `}
				<select
					className="main__results_sort"
					name="sorting"
					id="sorting"
					onChange={handleSortingItems}
				>
					<option
						className="main__result_sort-option--default"
						value="default"
						hidden
					>
						-- pasirinkite --
					</option>
					<option className="main__result_sort-option" value="titleA-Z">
						pavadinimą (a-z)
					</option>
					<option className="main__result_sort-option" value="titleZ-A">
						pavadinimą (z-a)
					</option>
					<option className="main__result_sort-option" value="priceFromLowest">
						kainą nuo mažiausios
					</option>
					<option className="main__result_sort-option" value="priceFromHighest">
						kainą nuo didžiausios
					</option>
					<option className="main__result_sort-option" value="statusFromBest">
						būklę (geriausi pirma)
					</option>
					<option className="main__result_sort-option" value="statusFromWorst">
						būklę (prasčiausi pirma)
					</option>
				</select>
			</label>
		</>
	);
}

export { SortingMenu };
