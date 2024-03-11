import { ReactNode } from "react";

type TypeUrl = {
	url: string;
};

export type TypeResultsItem = {
	id?: number;
	title: string;
	photo: {
		thumbnails: TypeUrl[];
	};
	price: number;
	currency?: string;
	status: string;
	url?: string;
};

export type TypeResultsContainer = {
	searchQuery: string[] | null;
	data: TypeResultsItem[] | undefined;
	children: ReactNode;
};
