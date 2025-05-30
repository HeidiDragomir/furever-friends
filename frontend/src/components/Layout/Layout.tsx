import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import ErrorBoundary from "../Error/ErrorBoundary.tsx";
import ErrorFallback from "../Error/ErrorFallback.tsx";

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            <main className="flex-grow">
                <ErrorBoundary
                    fallback={<ErrorFallback />}
                    key={location.pathname}
                >
                    {/* The key prop ensures that the ErrorBoundary remounts on route changes */}
                    <Outlet />
                </ErrorBoundary>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
