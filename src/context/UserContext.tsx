import { createContext, useState, ReactNode } from "react";
// types
import { userContextType, userType } from "../types/types";

const UserContext = createContext<userContextType>({
	user: undefined,
	setUser: () => {},
	userMenuVisibility: false,
	setUserMenuVisibility: () => {},
});

function UserContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<userType | undefined>(undefined);
	const [userMenuVisibility, setUserMenuVisibility] = useState(false);

	return (
		<UserContext.Provider
			value={{ user, setUser, userMenuVisibility, setUserMenuVisibility }}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
