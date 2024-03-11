import { TypeResultsItem } from "../types/ResultType";

export const statusMap: { [status: string]: number } = {
	"Nauja su etiketėmis": 0,
	"Nauja be etikečių": 1,
	"Labai gera": 2,
	Gera: 3,
	Patenkinama: 4,
};

export function sortingItems(array: TypeResultsItem[], sortingMethod: string) {
	let sortedItems;

	switch (sortingMethod) {
		case "priceFromLowest":
			sortedItems = array.toSorted((a, b) => a.price - b.price);
			break;
		case "priceFromHighest":
			sortedItems = array.toSorted((a, b) => b.price - a.price);
			break;
		case "titleA-Z":
			sortedItems = array.toSorted((a, b) =>
				a.title.toLowerCase().localeCompare(b.title.toLowerCase())
			);
			break;
		case "titleZ-A":
			sortedItems = array.toSorted((a, b) =>
				b.title.toLowerCase().localeCompare(a.title.toLowerCase())
			);
			break;
		case "statusFromBest":
			sortedItems = array.toSorted(
				(a, b) => statusMap[a.status] - statusMap[b.status]
			);
			break;
		case "statusFromWorst":
			sortedItems = array.toSorted(
				(a, b) => statusMap[b.status] - statusMap[a.status]
			);
			break;
		default:
			break;
	}
	return sortedItems;
}
