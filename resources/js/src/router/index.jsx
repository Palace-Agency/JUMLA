import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

// export const DOCTOR_BASE_ROUTE = "/doctor";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
