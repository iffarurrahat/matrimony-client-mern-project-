import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import Logo from "../Logo";

const NavBar = () => {

    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);


    const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
    const location = useLocation();
    useEffect(() => {
        // Update background color based on the current route
        if (location.pathname === "/") {
            setNavbarBackgroundColor("");
        } else {
            setNavbarBackgroundColor("secondary");
        }
    }, [location.pathname]);



    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful')
            })
            .catch(error => {
                if (error.message) {
                    toast.error('Something wrong')
                }
            })
    }


    const navLink = <>
        <li className="mb-3 md:mb-0">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-tertiary text-quaternary px-3 py-1 rounded" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="mb-3 md:mb-0">
            <NavLink
                to="/biodata"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-tertiary text-quaternary px-3 py-1 rounded" : ""
                }
            >
                Biodata
            </NavLink>
        </li>
        {
            user &&
            <li className="mb-3 md:mb-0">
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-tertiary text-quaternary px-3 py-1 rounded" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        }
        <li className="mb-3 md:mb-0">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-tertiary text-quaternary px-3 py-1 rounded" : ""
                }
            >
                Contact Us
            </NavLink>
        </li>
        {
            user ?
                <li onClick={handleLogout} className="cursor-pointer">Logout</li> :
                <li>
                    <NavLink
                        to="/signin"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-tertiary text-quaternary px-3 py-1 rounded" : ""
                        }
                    >
                        Signin
                    </NavLink>
                </li>
        }

    </>


    return (
        <div className={`bg-${navbarBackgroundColor} absolute top-0 left-0 right-0 z-50`}>
            <nav className="flex items-center justify-between py-2 max-w-screen-xl mx-auto px-3 md:px-[20px] text-white">
                <h1 className="text-3xl font-3xl">
                    <Logo />
                </h1>
                <div>
                    <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                        {
                            open ? <RiCloseLine /> : <RiMenu2Line />
                        }
                    </div>
                    <ul className={`z-50 md:flex  absolute gap-6 md:static bg-secondary md:bg-transparent mr-4 md:mr-0 right-0 px-16 md:px-0 py-6 rounded-lg ${open ? 'top-12' : '-top-60'}`}>
                        <p className="md:flex items-center gap-12 font-satisfy font-medium tracking-widest text-center md:text-start">
                            {navLink}
                        </p>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;










