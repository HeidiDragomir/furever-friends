import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/utils/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Toaster />
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </StrictMode>
);
