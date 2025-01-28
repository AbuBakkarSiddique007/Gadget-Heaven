import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li> <NavLink >Statistics</NavLink> </li>
        <li><NavLink to={'/listedCart'}>Dashboard</NavLink></li>
    </>

    return (
        <div className="border-2 border-blue-500 navbar bg-base-100 shadow-sm rounded-t-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className=" text-xl">Gadget Heaven </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn rounded-full"><BsCart3 /></a>
                <a className="btn rounded-full"><FaHeart /></a>
            </div>
        </div>
    );
};

export default Navbar;