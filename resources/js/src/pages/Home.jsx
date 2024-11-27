import React, { useState } from "react";
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
import { useGetHomeContentQuery } from "../slices/homeContentSlice";
import { Helmet } from "react-helmet-async";
import usePageTracking from "../components/hooks/use-page-tracking";
import LoadingPage from "../components/Loading/LoadingPage";
import { useGetLatestBlogQuery } from "../slices/BlogsSlice";
import CookieConsentBanner from "../components/CookieConsentBanner";

const Home = () => {
    const {
        data: content,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetHomeContentQuery("");

    const { data: latestBlogs, isSuccessLoading } = useGetLatestBlogQuery("");

    let headerSection = null;
    let aboutUsSection = null;
    let servicesSection = null;
    let trackRecordSection = null;
    let locationsSection = null;
    let partnersSection = null;
    let blogsSection = null;
    let faqSection = null;
    let testimonialsSection = null;

    if (isSuccess && content?.entities[1]) {
        const homeData = content.entities[1];
        const { sections } = homeData;

        sections.forEach((section) => {
            switch (section.name) {
                case "Header":
                    headerSection = section.content;
                    break;
                case "About us":
                    aboutUsSection = section.content;
                    break;
                case "Services":
                    servicesSection = section.content;
                    break;
                case "Track record":
                    trackRecordSection = section.content;
                    break;
                case "Locations":
                    locationsSection = section.content;
                    break;
                case "Partners":
                    partnersSection = section.content;
                    break;
                case "Blogs":
                    blogsSection = section.content;
                    break;
                case "FAQ":
                    faqSection = section.content;
                    break;
                case "Testimonials":
                    testimonialsSection = section.content;
                    break;
                default:
                    console.warn(`Unknown section: ${section.name}`);
            }
        });
    }

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    usePageTracking();
    return (
        <>
            {isLoading ? (
                <>
                    <LoadingPage />
                </>
            ) : (
                <>
                    <Helmet>
                        <meta
                            property="title"
                            content={content?.entities[1]?.meta_title}
                        />
                        <meta
                            name="description"
                            content={content?.entities[1]?.meta_description}
                        />
                        <meta
                            property="keywords"
                            content={content?.entities[1]?.meta_keywords}
                        />
                    </Helmet>
                    <CookieConsentBanner />
                    <div className="container">
                        <Header content={headerSection} />
                        <AboutUs content={aboutUsSection} />
                        <Service content={servicesSection} />
                        <State content={trackRecordSection} />
                        <Location content={locationsSection} />
                        <Partner content={partnersSection} />
                        <Blog blogs={latestBlogs} content={blogsSection} />
                        <FAQ content={faqSection} />
                    </div>
                    <Testimonial content={testimonialsSection} />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
