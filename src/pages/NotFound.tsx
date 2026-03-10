import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4">404</h1>
            <p className="text-xl md:text-2xl mb-6">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <Link
                to="/"
                className="text-white px-6 py-3 rounded-md hover:bg-[#D8553A] bg-[#E2725B] transition-colors"
            >
                Go Home
            </Link>

        </div>
    )
}

export default NotFound