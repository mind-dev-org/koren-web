import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow p-4">
                <h1 className="text-2xl font-bold text-green-700">header</h1>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-6 py-8">
                <Outlet />
            </main>

            <footer className="bg-white shadow p-4 text-center text-gray-500">
                Koren footer
            </footer>
        </div>
    );
}