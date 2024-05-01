import { ReactNode, Dispatch, SetStateAction, MouseEventHandler } from "react";

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
	full_size_url: string;
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
	picture: string;
	isLoggedIn: boolean;
	sessionExpirationDate: number;
};

type userMenuVisibilityType = {
	toggleUserMenuVisibility: () => void;
};

type defaultButtonType = {
	onClick: MouseEventHandler;
	children?: ReactNode;
	className?: string;
	id?: string;
	title?: string;
	type?: "submit" | "reset" | "button" | undefined;
};
