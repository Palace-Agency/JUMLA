import React from "react";
import "./LoadingPage.scss";
import { logo } from "../../constants/logo";

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000]">
            <img
                alt="Loading"
                src={logo}
                className="h-10 w-auto loading-effect"
            />
        </div>
    );
};

export default LoadingPage;
