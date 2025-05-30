import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../api/authApi.ts";

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

    // REGISTER
    const register = async (
        username: string,
        email: string,
        password: string
    ): Promise<boolean> => {
        const result = await registerUser(username, email, password);

        if (!result.success) {
            toast.error(
                result.message || "Ett fel inträffade vid registrering."
            );
            return false;
        }

        return true;
    };

    // LOGIN
    const login = async (email: string, password: string): Promise<boolean> => {
        const result = await loginUser(email, password);

        if (!result.success || !result.data) {
            toast.error(result.message || "Ett fel inträffade vid inloggning.");
            return false;
        }

        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        setUser({ email });
        return true;
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
