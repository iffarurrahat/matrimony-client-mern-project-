import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import logoImag from "../../../assets/Logo/birds_logo_2.png"

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const navLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/biodata"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
            >
                Biodata
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
            >
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/signin"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
            >
                Signin
            </NavLink>
        </li>
    </>


    return (
        <nav className=" flex items-center justify-between py-2 absolute top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto px-3 md:px-[20px] text-white">
            <h1 className="text-3xl font-3xl">
                <Link to="/"><img src={logoImag} className="h-10" alt="" /></Link>
            </h1>
            <div>
                <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                    {
                        open ? <RiCloseLine /> : <RiMenu2Line />
                    }
                </div>
                <ul className={`z-50 md:flex  absolute gap-6 md:static bg-slate-200 md:bg-transparent mr-4 md:mr-0 right-0 px-6 md:px-0 py-4 rounded-lg ${open ? 'top-16' : '-top-60'}`}>
                    <div className=" md:flex items-center gap-6">
                        {navLink}
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;











