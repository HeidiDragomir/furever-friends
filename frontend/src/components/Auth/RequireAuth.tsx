// components/RequireAuth.tsx
import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../../context/UserContext.tsx";

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const { token } = useContext(UserContext);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
