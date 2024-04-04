import { createContext, useState, useEffect, ReactNode } from "react";
import { contactProxy } from "../services/contactProxy.ts";
// types
import { dataContextType } from "../types/contextTypes";
import { resultsItemType } from "../types/resultsDataTypes";

const DataContext = createContext<dataContextType>({
	data: undefined,
	setData: () => {},
	searchQuery: null,
	setSearchQuery: () => {},
	isLoading: false,
	setIsLoading: () => {},
});

function DataContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<resultsItemType[] | undefined>(undefined);
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
		<DataContext.Provider
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
		</DataContext.Provider>
	);
}

export { DataContext, DataContextProvider };
