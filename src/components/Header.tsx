import { Link } from "react-router-dom"
import menuClose from '../assets/menu_close.svg'
import {useState} from "react"

const links = [
    {
        name: 'marketplace',
        link: '/marketplace',
        id: 0
    },
    {
        name: 'farmers',
        link: '/farmers',
        id: 1
    },
    {
        name: 'about us',
        link: '/about',
        id: 2
    }
]

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="relative">
            <div className="max-w-[1280px] h-[95px] mx-auto flex items-center justify-between px-8 md:px-16 xl:px-0 py-5">
                <Link to="/">
                    <span
                        className="text-3xl font-bold"
                    >
                        KOREN
                    </span>
                </Link>

                {/*desktop*/}
                <div className="hidden lg:flex items-center justify-center gap-7">
                    <nav className="flex gap-7">
                        {
                            links.map(item => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="text-[24px] text-blackColor font-medium hover:text-darkCoralColor transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>

                {/*mobile burger menu*/}
                <button
                    className="lg:hidden flex flex-col gap-[4.5px]"
                    onClick={() => setOpen(!open)}
                >
                    {
                        Array.from({length: 3}).map((_, index) => (
                            <span
                                key={index}
                                className="w-7 h-[4px] bg-blackColor rounded-3xl"
                            ></span>
                        ))
                    }
                </button>
            </div>

            {/*mobile*/}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkCoralColor z-40 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                >
                    <img src={menuClose} alt="close" className="h-14 w-auto"/>
                </button>
                <nav className="flex flex-col items-center justify-center h-full gap-6">
                    {links.map(item => (
                        <div
                            key={item.id}
                            className="border-b text-lightBlueTextColor"
                        >
                            <Link
                                to={item.link}
                                onClick={() => setOpen(false)}
                                className="text-3xl text-lightColor font-semibold"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}

                    <Link
                        to={'#'}
                        onClick={() => setOpen(false)}
                        className="text-3xl text-lightColor font-semibold border-b"
                    >
                        Get In Touch
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header