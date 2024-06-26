import { resultsItemType } from "../types/types";

export const statusMap: { [status: string]: number } = {
	"Nauja su etiketėmis": 0,
	"Nauja be etikečių": 1,
	"Labai gera": 2,
	Gera: 3,
	Patenkinama: 4,
};

export function sortingItems(array: resultsItemType[], sortingMethod: string) {
	let sortedItems;

	switch (sortingMethod) {
		case "newest":
			sortedItems = array.toSorted((a, b) => b.timestamp - a.timestamp);
			break;
		case "oldest":
			sortedItems = array.toSorted((a, b) => a.timestamp - b.timestamp);
			break;
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
