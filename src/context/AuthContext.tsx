import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";

export interface AuthContextProps {
    token?: string;
    setToken: Dispatch<SetStateAction<string | undefined>>;
}

const AuthContext = createContext<AuthContextProps>({
    token: undefined,
    setToken: () => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
