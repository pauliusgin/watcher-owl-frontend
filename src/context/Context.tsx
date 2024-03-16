import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";

import { contactProxy } from "../services/contactProxy.ts";
// types
import { TypeContext } from "../types/ContextType.ts";
import { TypeResultsItem } from "../types/ResultType.ts";

const Context = createContext<TypeContext>({
	data: undefined,
	setData: () => {},
	searchQuery: null,
	setSearchQuery: () => {},
	isLoading: false,
	setIsLoading: () => {},
});

function ContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<TypeResultsItem[] | undefined>(undefined);
	const [searchQuery, setSearchQuery] = useState<string[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		async function getInfoFromProxy() {
			if (searchQuery && searchQuery.length > 0) {
				setIsLoading(true);
				const results = await contactProxy(searchQuery);
				setData(results);
				setIsLoading(false);
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
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
