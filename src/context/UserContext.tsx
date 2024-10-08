import { createContext, useState, ReactNode, useEffect } from "react";
import { userContextType, userType } from "../types/types";
import { addOrRetrieveUserFromDatabase } from "../services/user.services";
import { useAuth } from "../hooks/custom.hooks";

const UserContext = createContext<userContextType>({
    user: undefined,
    setUser: () => {},
    userMenuVisibility: false,
    setUserMenuVisibility: () => {},
});

function UserContextProvider({ children }: { children: ReactNode }) {
    const { setToken } = useAuth();

    const [user, setUser] = useState<userType | undefined>(undefined);
    const [userMenuVisibility, setUserMenuVisibility] = useState(false);

    useEffect(() => {
        async function onPageReload() {

            const userInSessionStorage = JSON.parse(
                sessionStorage.getItem(`userSession`) as string
            );
            if (userInSessionStorage?.isLoggedIn) {
                const { given_name, email, picture, isLoggedIn, userId } =
                    userInSessionStorage;

                setUser({
                    email,
                    given_name,
                    isLoggedIn,
                    picture,
                    userId,
                });
            }
        }

        onPageReload();
    }, []);

    useEffect(() => {
        async function addUser() {
            if (user && !user.userId) {
                const response = await addOrRetrieveUserFromDatabase(user);

                const { _user, token } = response;

                setToken(token);

                setUser({
                    email: _user.email,
                    given_name: _user.given_name,
                    isLoggedIn: user.isLoggedIn,
                    picture: _user.picture,
                    userId: _user._id,
                });

                sessionStorage.setItem("token", token);

                sessionStorage.setItem(
                    `userSession`,
                    JSON.stringify({
                        email: _user.email,
                        given_name: _user.given_name,
                        isLoggedIn: user.isLoggedIn,
                        picture: _user.picture,
                        userId: _user._id,
                    })
                );
            }
        }
        addUser();
    }, [user, setToken]);

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
