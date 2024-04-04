import { createContext, useState, ReactNode } from "react";
// types
import { userContextType } from "../types/contextTypes";

const UserContext = createContext<userContextType>({
	loggedIn: false,
	setLoggedIn: () => {},
});

function UserContextProvider({ children }: { children: ReactNode }) {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	console.log("logged in:", loggedIn);

	return (
		<UserContext.Provider value={{ loggedIn, setLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
