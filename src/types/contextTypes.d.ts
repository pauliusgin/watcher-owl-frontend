import { Dispatch, SetStateAction } from "react";

// types
import { resultsItemType } from "./resultsDataTypes";

type dataContextType = {
	data: resultsItemType[] | undefined;
	setData: Dispatch<SetStateAction<TypeResultsItem[] | undefined>>;
	searchQuery: string[] | null;
	setSearchQuery: Dispatch<SetStateAction<string[] | null>>;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
};
