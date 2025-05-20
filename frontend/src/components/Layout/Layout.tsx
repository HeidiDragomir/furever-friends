import { Outlet } from "react-router";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

// type LayoutProps = {
//     isLoggedIn: boolean;
//     setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// };
const Layout = () => {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
