import React from "react";
import { not_found } from "../constants/images";
import Magnetic from "../common/Magnetic/Magnetic";
import { Link } from "react-router-dom";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About us", href: "/about-us" },
    { title: "Contact us", href: "/contact-us" },
    { title: "Blogs", href: "/blogs" },
];
const NotFound = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[1000]">
            <img alt="Loading" src={not_found} className="h-80 w-auto" />
            <p className="text-2xl mb-3 font-bold text-indigo-600">
                404 Not Found
            </p>
            <p className="text-4xl font-bold">
                Whoops! That page doesn’t exist.
            </p>
            <div className="mt-6 text-center space-y-3 opacity-75">
                <p className="text-lg">Here are some helpful links instead:</p>
                <div className="flex text-base items-center justify-center gap-3">
                    {navItems.map((item) => (
                        <Magnetic>
                            <Link
                                className="underline font-semibold text-gray-600"
                                to={item.href}
                                key={item.href}
                            >
                                {item.title}
                            </Link>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotFound;
