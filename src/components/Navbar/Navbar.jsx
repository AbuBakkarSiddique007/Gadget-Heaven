import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();

    // Conditional styles based on the current route
    const isHomePage = location.pathname === "/";

    const navbarStyles = isHomePage
        ? "bg-customPurple text-white"
        : "bg-white text-black";

    const links = (
        <>
            <li className="text-xl font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-1 border-gray-400 rounded-full bg-white text-black p-2"
                            : "text-black hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
            </li>

            {/* <li className="text-xl font-semibold">
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive
                            ? "border-1 border-gray-400 rounded-full bg-white text-black p-2"
                            : "text-black hover:text-blue-500"
                    }
                >
                    Statistics
                </NavLink>
            </li> */}
            <li className="text-xl font-semibold">
                <NavLink
                    to="/deals"
                    className={({ isActive }) =>
                        isActive
                            ? "border-1 border-gray-400 rounded-full bg-white text-black p-2"
                            : "text-black hover:text-blue-500"
                    }
                >
                    Deals
                </NavLink>
            </li>

            <li className="text-xl font-semibold">
                <NavLink
                    to="/listedCart"
                    className={({ isActive }) =>
                        isActive
                            ? "border-1 border-gray-400 rounded-full bg-white text-black p-2"
                            : "text-black hover:text-blue-500"
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className={`navbar shadow-sm rounded-t-2xl p-5 px-10 ${navbarStyles}`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="flex justify-center items-center menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
                    >
                        {links}
                    </ul>
                </div>
                <a className="text-3xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn rounded-full">
                    <BsCart3 />
                </a>
                <a className="btn rounded-full">
                    <FaHeart />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
