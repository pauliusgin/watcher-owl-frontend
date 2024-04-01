import { ReactNode } from "react";

type resultsItemType = {
	id?: number;
	title: string;
	photo: string;
	price: number;
	currency?: string;
	status: string;
	url?: string;
};

type resultsContainerType = {
	searchQuery: string[] | null;
	data: TypeResultsItem[] | undefined;
	children: ReactNode;
};
