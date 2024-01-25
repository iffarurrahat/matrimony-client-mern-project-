import { Outlet } from "react-router-dom";
import NavBar from "../Home/Shared/NavBar/NavBar";

const Main = () => {

    // const location = useLocation();
    // // console.log(location);
    // const onHederFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
            <NavBar />
            <Outlet />
            <p className="bg-green-400 text-white py-10 mt-96">Footer</p>
        </div>
    );
};

export default Main;