import { createContext, useState, ReactNode, useEffect } from "react";
import { userContextType, userType } from "../types/types";
// import { addNewUser } from "../services/addNewUser.service";

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
		async function newUser() {
			if (user) {
				sessionStorage.setItem(`userSession`, JSON.stringify(user));
				// todo logic with database
				// const result = await addNewUser(user);
				// if (result) {
				// 	console.log("useEffect here", result);
				// }
			}
		}
		newUser();
	}, [user]);

	useEffect(() => {
		const userOnPageReload = JSON.parse(
			sessionStorage.getItem(`userSession`) as string
		);
		if (
			userOnPageReload?.isLoggedIn &&
			userOnPageReload?.sessionExpirationDate > Date.now()
		) {
			const { given_name, email, picture, isLoggedIn } = userOnPageReload;
			setUser({
				given_name,
				email,
				picture,
				isLoggedIn,
				sessionExpirationDate: Date.now() + 1000 * 60 * 60 * 24,
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
