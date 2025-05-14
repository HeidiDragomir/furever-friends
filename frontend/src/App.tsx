import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import BusinessPlan from "./pages/BusinessPlan.tsx";
import ProjectIdea from "./pages/ProjectIdea.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { useEffect, useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is already logged in
    useEffect(() => {
        const user = localStorage.getItem("User");
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                }
            >
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/business-plan" element={<BusinessPlan />} />
                <Route path="/project-idea" element={<ProjectIdea />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
