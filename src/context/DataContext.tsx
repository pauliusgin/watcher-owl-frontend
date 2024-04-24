import { createContext, useState, useEffect, ReactNode } from "react";
import { contactProxy } from "../services/contactProxy.ts";
// types
import { dataContextType, resultsItemType } from "../types/types";

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

				if (results) {
					sessionStorage.setItem(
						`${searchQuery.toString().replaceAll(",", "+")}`,
						JSON.stringify(results)
					);
				}

				setIsLoading(false);
			}
		}
		getInfoFromProxy();
	}, [searchQuery]);

	useEffect(() => {
		const dataOnPageReload = JSON.parse(
			sessionStorage.getItem(`${location.search.slice(1)}`) as string
		);
		setData(dataOnPageReload);
	}, []);

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
