import React from "react";
import { useEffect } from "react";
import { Header } from "../containers";

const Home = () => {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <div className="container">
            <Header />
        </div>
    );
};

export default Home;
