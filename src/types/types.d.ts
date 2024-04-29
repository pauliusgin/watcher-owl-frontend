import { ReactNode, Dispatch, SetStateAction } from "react";

type dataContextType = {
	data: resultsItemType[] | undefined;
	setData: Dispatch<SetStateAction<TypeResultsItem[] | undefined>>;
	sessionData: resultsItemType[] | [] | undefined;
	setSessionData: Dispatch<SetStateAction<TypeResultsItem[] | [] | undefined>>;
	searchQuery: string[] | null;
	setSearchQuery: Dispatch<SetStateAction<string[] | null>>;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type userContextType = {
	user: userType | undefined;
	setUser: Dispatch<SetStateAction<userType | undefined>>;
	userMenuVisibility: boolean;
	setUserMenuVisibility: Dispatch<SetStateAction<boolean>>;
};

type resultsItemType = {
	id?: number;
	title: string;
	photo: string;
	timestamp: number;
	price: number;
	currency?: string;
	status: string;
	url?: string;
};

type resultsContainerType = {
	children: ReactNode;
};

type sortingMethodType =
	| "priceFromLowest"
	| "priceFromHighest"
	| "titleA-Z"
	| "titleZ-A"
	| "statusFromBest"
	| "statusFromWorst";

type userType = {
	given_name: string;
	email: string;
	Google_ID: string;
	picture: string;
	isLoggedIn: boolean;
};

type userMenuVisibilityType = {
	toggleUserMenuVisibility: () => void;
};
