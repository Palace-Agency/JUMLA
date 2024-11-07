import React from "react";
import { useEffect } from "react";
import {
    AboutUs,
    Header,
    Location,
    Partner,
    Service,
    State,
} from "../containers";

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
            <AboutUs />
            <Service />
            <State />
            <Location />
            <Partner />
        </div>
    );
};

export default Home;
