import { createContext, useState, useEffect } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

import { contactProxy } from "../services/contactProxy.ts";
// types
import { TypeResultsItem } from "../types/ResultTypes.ts";

export type TypeContext = {
	data: TypeResultsItem[] | undefined;
	setData: Dispatch<SetStateAction<TypeResultsItem[] | undefined>>;
	searchQuery: string[] | null;
	setSearchQuery: Dispatch<SetStateAction<string[] | null>>;
	sortValue: string;
	setSortValue: Dispatch<SetStateAction<string>>;
};

const Context = createContext<TypeContext>({
	data: undefined,
	setData: () => {},
	searchQuery: null,
	setSearchQuery: () => {},
	sortValue: "title",
	setSortValue: () => {},
});

function ContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<TypeResultsItem[] | undefined>(undefined);
	const [searchQuery, setSearchQuery] = useState<string[] | null>(null);
	const [sortValue, setSortValue] = useState<string>("title");

	useEffect(() => {
		async function getInfoFromProxy() {
			if (searchQuery) {
				try {
					// todo error??
					const results = await contactProxy(searchQuery);
					setData(results.items);
				} catch (error) {
					if (error instanceof Error) console.log(error.message);
				}
			}
		}
		getInfoFromProxy();
	}, [searchQuery]);

	return (
		<Context.Provider
			value={{
				data,
				setData,
				searchQuery,
				setSearchQuery,
				sortValue,
				setSortValue,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
