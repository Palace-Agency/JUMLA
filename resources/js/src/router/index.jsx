import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";

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
                path: "/services",
                element: <Service />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
