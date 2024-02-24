/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Spinner from "../components/Spinner/Spinner";

const AdminRoute = ({ children }) => {
    const [role, loading] = useRole();

    if (loading) return <Spinner />
    if (role === 'admin') return children;

    return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;