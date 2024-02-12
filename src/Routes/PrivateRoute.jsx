import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from '../components/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>

};


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;