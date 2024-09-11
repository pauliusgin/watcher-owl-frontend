import "./SortingMenu.scss";
import { ChangeEvent } from "react";
import { sortingItems } from "../../../../utils/sortingUtils";
import { useData } from "../../../../hooks/custom.hooks";

function SortingMenu() {
    const { data, setData, sessionData, setSessionData } = useData();

    function handleSortingItems(event: ChangeEvent<HTMLSelectElement>) {
        const sortValue = event.target.value;

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
                {`Rikiuojama pagal `}
                <select
                    className="main__results_sort"
                    name="sorting"
                    id="sorting"
                    onChange={handleSortingItems}>
                    <option className="main__result_sort-option" value="newest">
                        datą (naujausi pirma)
                    </option>
                    <option className="main__result_sort-option" value="oldest">
                        datą (seniausi pirma)
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="titleA-Z">
                        pavadinimą (a-z)
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="titleZ-A">
                        pavadinimą (z-a)
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="priceFromLowest">
                        kainą nuo mažiausios
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="priceFromHighest">
                        kainą nuo didžiausios
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="statusFromBest">
                        būklę (geriausi pirma)
                    </option>
                    <option
                        className="main__result_sort-option"
                        value="statusFromWorst">
                        būklę (prasčiausi pirma)
                    </option>
                </select>
            </label>
        </>
    );
}

export { SortingMenu };
