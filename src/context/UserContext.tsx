import { createContext, useState, ReactNode, useEffect } from "react";
import { userContextType, userType } from "../types/types";
import { expiresAfterThisManyHours } from "../utils/setExpirationDate";
import { addUserToDatabase } from "../services/userAdd.service";

const UserContext = createContext<userContextType>({
	user: undefined,
	setUser: () => {},
	userMenuVisibility: false,
	setUserMenuVisibility: () => {},
});

function UserContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<userType | undefined>(undefined);
	const [userMenuVisibility, setUserMenuVisibility] = useState(false);

	useEffect(() => {
		if (user) {
			sessionStorage.setItem(`userSession`, JSON.stringify(user));

			addUserToDatabase(user);
		}
	}, [user]);

	useEffect(() => {
		const userInSessionStorage = JSON.parse(
			sessionStorage.getItem(`userSession`) as string
		);
		if (
			userInSessionStorage?.isLoggedIn &&
			userInSessionStorage?.sessionExpirationDate > Date.now()
		) {
			const { given_name, email, picture, isLoggedIn } = userInSessionStorage;
			setUser({
				given_name,
				email,
				picture,
				isLoggedIn,
				sessionExpirationDate: expiresAfterThisManyHours(24),
			});
		}
	}, []);

	return (
		<UserContext.Provider
			value={{ user, setUser, userMenuVisibility, setUserMenuVisibility }}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
