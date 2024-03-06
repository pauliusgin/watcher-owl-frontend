import { ReactNode } from "react";

export type TypeResultsItem = {
	id?: number;
	title?: string;
	photo: {
		thumbnails: {
			url: string;
		}[];
	};
	price?: number;
	currency?: string;
	status?: string;
	url?: string;
};

export type TypeResultsContainer = {
	searchQuery: string[] | null;
	data: TypeResultsItem[] | undefined;
	children: ReactNode;
};
