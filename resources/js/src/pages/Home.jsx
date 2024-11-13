import React from "react";
import { useEffect } from "react";
import {
    AboutUs,
    Header,
    Location,
    Partner,
    Service,
    State,
    Blog,
    Testimonial,
} from "../containers";
import Footer from "../components/footer/Footer";
import FAQ from "../containers/home/faq/FAQ";

const Home = () => {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <>
            <div className="container">
                <Header />
                <AboutUs />
                <Service />
                <State />
                <Location />
                <Partner />
                <Blog />
                <FAQ />
            </div>
            <Testimonial />
            <Footer />
        </>
    );
};

export default Home;
