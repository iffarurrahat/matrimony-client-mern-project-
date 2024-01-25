import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;