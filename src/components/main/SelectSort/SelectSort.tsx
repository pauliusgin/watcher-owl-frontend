import "./SelectSort.scss";
import { useContext, ChangeEvent } from "react";
import { Context } from "../../../context/Context";
import { sortingItems } from "../../../utils/sortingUtils";

function SelectSort() {
	const { data, setData } = useContext(Context);

	function handleSortingItems(event: ChangeEvent<HTMLSelectElement>) {
		const sortValue = event.target.value;
		console.log("Sorting by:", sortValue);

		if (data) {
			const sortedItems = sortingItems(data, sortValue);
			setData(sortedItems);
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

export { SelectSort };
