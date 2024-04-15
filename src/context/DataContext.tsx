import { createContext, useState, useEffect, ReactNode } from "react";
import { contactProxy } from "../services/contactProxy.ts";
// types
import { dataContextType } from "../types/contextTypes";
import { resultsItemType } from "../types/resultsDataTypes";

const DataContext = createContext<dataContextType>({
	data: undefined,
	setData: () => {},
	sessionData: undefined,
	setSessionData: () => {},
	searchQuery: null,
	setSearchQuery: () => {},
	isLoading: false,
	setIsLoading: () => {},
});

function DataContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<resultsItemType[] | undefined>(undefined);
	const [sessionData, setSessionData] = useState<
		resultsItemType[] | [] | undefined
	>(undefined);

	const [searchQuery, setSearchQuery] = useState<string[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		async function getInfoFromProxy() {
			if (searchQuery && searchQuery.length > 0) {
				setIsLoading(true);

				const results = await contactProxy(searchQuery);

				setData(results);
				setSessionData(results);

				setIsLoading(false);
			}
		}
		getInfoFromProxy();
	}, [searchQuery]);

	useEffect(() => {
		if (sessionData) {
			sessionStorage.setItem(
				`${searchQuery?.toString().replaceAll(",", "+")}`,
				JSON.stringify(sessionData)
			);
		}
	}, [sessionData, searchQuery]);

	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				sessionData,
				setSessionData,
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
