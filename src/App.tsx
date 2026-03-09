import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import FarmersPage from "./pages/FarmersPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="marketplace" element={<MarketplacePage />} />
                    <Route path="farmers" element={<FarmersPage />} />
                    <Route path="about" element={<AboutUsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
