import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;