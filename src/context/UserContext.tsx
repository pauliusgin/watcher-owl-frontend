import { createContext, useState, ReactNode, useEffect } from "react";
import { userContextType, userType } from "../types/types";
import { expiresAfterThisManyHours } from "../utils/setExpirationDate";
import { addOrRetrieveUserFromDatabase } from "../services/user.services";

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
        async function onPageReload() {
            const userInSessionStorage = JSON.parse(
                sessionStorage.getItem(`userSession`) as string
            );
            if (
                userInSessionStorage?.isLoggedIn &&
                userInSessionStorage?.sessionExpirationDate > Date.now()
            ) {
                const { given_name, email, picture, isLoggedIn, userId } =
                    userInSessionStorage;

                setUser({
                    email,
                    given_name,
                    isLoggedIn,
                    picture,
                    sessionExpirationDate: expiresAfterThisManyHours(24),
                    userId,
                });
            }
        }

        onPageReload();
    }, []);

    useEffect(() => {
        async function addUser() {
            if (user && !user.userId) {
                const _user = await addOrRetrieveUserFromDatabase(user);

                setUser({
                    email: _user.email,
                    given_name: _user.given_name,
                    isLoggedIn: user.isLoggedIn,
                    picture: _user.picture,
                    sessionExpirationDate: user.sessionExpirationDate,
                    userId: _user._id,
                });

                sessionStorage.setItem(
                    `userSession`,
                    JSON.stringify({
                        email: _user.email,
                        given_name: _user.given_name,
                        isLoggedIn: user.isLoggedIn,
                        picture: _user.picture,
                        sessionExpirationDate: user.sessionExpirationDate,
                        userId: _user._id,
                    })
                );
            }
        }
        addUser();
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                userMenuVisibility,
                setUserMenuVisibility,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
