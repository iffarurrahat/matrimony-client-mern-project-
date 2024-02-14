import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Biodata from "../pages/Biodata/Biodata";
import ContactUs from "../pages/ContactUs/ContactUs";
import DashboardLayout from "../layout/DashboardLayout";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home/Home";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium";
import ApprovedContactRequest from "../pages/Dashboard/Admin/ApprovedContactRequest";
import Profile from "../pages/Dashboard/Common/Profile";
import PrivateRoute from "./PrivateRoute";
import EditBiodata from "../pages/Dashboard/User/EditBiodata";
import ViewBiodata from "../pages/Dashboard/User/ViewBiodata";
import MyContactRequest from "../pages/Dashboard/User/MyContactRequest";
import FavouritesBiodata from "../pages/Dashboard/User/FavouritesBiodata";
import ProfileCardDetails from "../components/ProfileCard/ProfileCardDetails";
import { getCandidate } from "../api/candidate";
import UpdateCandidateInfo from "../components/Dashboard/UpdateCandidateInfo/UpdateCandidateInfo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/candidate/:id',
                element: <PrivateRoute><ProfileCardDetails /></PrivateRoute>,
                loader: ({ params }) => getCandidate(params.id)
            },
            {
                path: '/biodata',
                element: <Biodata />,
            },
            {
                path: '/contact',
                element: <ContactUs />
            },

        ]
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: 'manage-users',
                element: (
                    <PrivateRoute>
                        <ManageUsers />
                    </PrivateRoute>
                )

            },
            {
                path: 'approved-premium',
                element: (
                    <PrivateRoute>
                        <ApprovedPremium />
                    </PrivateRoute>
                )
            },
            {
                path: 'approved-contact-request',
                element: (
                    <PrivateRoute>
                        <ApprovedContactRequest />
                    </PrivateRoute>
                )
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: 'edit-biodata',
                element: <PrivateRoute><EditBiodata /></PrivateRoute>
            },
            {
                path: 'view-biodata',
                element: <PrivateRoute><ViewBiodata /></PrivateRoute>,
            },
            {
                path: 'update-candidate-info/:id',
                element: <PrivateRoute> <UpdateCandidateInfo /></PrivateRoute>,
                loader: ({ params }) => getCandidate(params.id)
            },
            {
                path: 'my-contact-request',
                element: (
                    <PrivateRoute>
                        <MyContactRequest />
                    </PrivateRoute>
                )
            },
            {
                path: 'favourites-biodata',
                element: (
                    <PrivateRoute>
                        <FavouritesBiodata />
                    </PrivateRoute>
                )
            },
        ]
    },
]);

export default router;