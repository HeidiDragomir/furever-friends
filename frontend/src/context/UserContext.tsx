import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import toast from "react-hot-toast";

export type User = {
    username?: string;
    email: string;
};

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    token: string;
    login: (email: string, password: string) => Promise<boolean>;
    register: (
        username: string,
        email: string,
        password: string
    ) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const defaultState = {
    user: { email: "" },
    setUser: () => {},
    token: "",
    login: async () => false,
    register: async () => false,
    logout: () => {},
    isAuthenticated: false,
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>({ email: "" });
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // LOGIN
    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const res = await fetch(
                "https://localhost:7187/api/users/authenticate",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!res.ok) return false;

            const data = await res.json();

            localStorage.setItem("token", data.token);
            setToken(data.token);
            setUser({ email });

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // REGISTER
    const register = async (
        username: string,
        email: string,
        password: string
    ): Promise<boolean> => {
        try {
            const res = await fetch(
                "https://localhost:7187/api/users/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, password }),
                }
            );

            if (!res.ok) return false;

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("token");
        setUser({ email: "" });
        setToken("");
        toast.success("Du är utloggad!", {
            position: "top-center",
        });
    };

    const isAuthenticated = !!token;

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                login,
                register,
                logout,
                token,
                isAuthenticated,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
