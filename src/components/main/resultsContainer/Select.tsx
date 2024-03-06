import "./Select.scss";
import { useContext } from "react";
import { Context } from "../../../context/Context";

function Select() {
	const { sortValue, setSortValue } = useContext(Context);
	// const sortRef = useRef<HTMLSelectElement>(null);

	function logSelectOptionChange(event): string {
		console.log("ref log:", sortRef?.current.value);
		setSortValue(event.current.value);
	}

	return (
		<>
			<label className="main__results_sort-label" htmlFor="sorting">
				{`Rikiuoti pagal `}
				<select
					className="main__results_sort"
					name="sorting"
					id="sorting"
					value={sortValue}
					// ref={sortRef}
					onChange={logSelectOptionChange}
				>
					<option className="main__result_sort-option" value="title">
						pavadinimą
					</option>
					<option className="main__result_sort-option" value="price">
						kainą
					</option>
					<option className="main__result_sort-option" value="status">
						būklę
					</option>
				</select>
			</label>
		</>
	);
}

export { Select };
