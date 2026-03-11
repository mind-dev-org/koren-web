import {createHashRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import FarmersPage from "../pages/FarmersPage";
import MarketplacePage from "../pages/MarketplacePage";
import NotFound from "../pages/NotFound";

export const router = createHashRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "marketplace", element: <MarketplacePage /> },
            { path: "farmers", element: <FarmersPage /> },
            { path: "about", element: <AboutUsPage /> },
        ],
    },
    { path: "*", element: <NotFound /> },
])