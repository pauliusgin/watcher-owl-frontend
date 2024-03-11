import { Dispatch, SetStateAction } from "react";
import { TypeResultsItem } from "./ResultType";

export type TypeContext = {
	data: TypeResultsItem[] | undefined;
	setData: Dispatch<SetStateAction<TypeResultsItem[] | undefined>>;
	searchQuery: string[] | null;
	setSearchQuery: Dispatch<SetStateAction<string[] | null>>;
};
