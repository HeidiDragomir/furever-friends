import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import BusinessPlan from "./pages/BusinessPlan.tsx";
import ProjectIdea from "./pages/ProjectIdea.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import InteractiveMap from "./pages/InteractiveMap.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Forum from "./pages/Forum.tsx";
import AdoptionFoster from "./pages/AdoptionFoster.tsx";
import Volunteer from "./pages/Volunteer.tsx";
import Events from "./pages/Events.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { MapProvider } from "./context/MapContext.tsx";
import RequireAuth from "./components/Auth/RequireAuth.tsx";

function App() {
    return (
        <UserProvider>
            <MapProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        <Route
                            path="/interactive-map"
                            element={
                                <RequireAuth>
                                    <InteractiveMap />
                                </RequireAuth>
                            }
                        />

                        <Route path="/events" element={<Events />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route
                            path="/adoption-foster"
                            element={<AdoptionFoster />}
                        />
                        <Route path="/forum" element={<Forum />} />
                        <Route path="/volunteer" element={<Volunteer />} />
                        <Route
                            path="/business-plan"
                            element={<BusinessPlan />}
                        />
                        <Route path="/project-idea" element={<ProjectIdea />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </Route>
                </Routes>
            </MapProvider>
        </UserProvider>
    );
}

export default App;
