import React, { useEffect, useRef, useState } from "react";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";
import { useGetAboutusContentQuery } from "../slices/aboutusContentSlice";
import usePageTracking from "../components/hooks/use-page-tracking";
import { Helmet } from "react-helmet-async";
import "./aboutus.css";
import LoadingPage from "../components/Loading/LoadingPage";

const AboutUs = () => {
    const [metaTitle, setMetaTitle] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [content, setContent] = useState({});
    const [groupedImages, setGroupedImages] = useState([]);
    const container = useRef(null);
    const containerRef = useRef(null);

    const {
        data: aboutusContent,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAboutusContentQuery("");

    useEffect(() => {
        if (isSuccess && aboutusContent) {
            const aboutusData =
                aboutusContent?.entities[
                    Object.keys(aboutusContent.entities)[0]
                ];
            if (aboutusData) {
                setMetaTitle(aboutusData.meta_title || "");
                setMetaKeywords(aboutusData.meta_keywords || "");
                setMetaDescription(aboutusData.meta_description || "");
                const { sections } = aboutusData;

                sections.forEach((section) => {
                    setContent(section.content);
                });
            }
        }
        if (content && content?.images) {
            const groupedImages = [];
            for (let i = 0; i < content.images.length; i += 2) {
                groupedImages.push(content.images.slice(i, i + 2));
            }
            setGroupedImages(groupedImages);
        }
    }, [isSuccess, aboutusContent]);

    useEffect(() => {
        if (content && content?.images) {
            const groupedImages = [];
            for (let i = 0; i < content.images.length; i += 2) {
                groupedImages.push(content.images.slice(i, i + 2));
            }
            setGroupedImages(groupedImages);
        }
    }, [content]);

    const SafeHtml = ({ htmlContent }) => {
        useEffect(() => {
            if (containerRef.current) {
                const shadowRoot = containerRef.current.attachShadow({
                    mode: "open",
                });
                const wrapper = document.createElement("div");
                wrapper.innerHTML = htmlContent;
                shadowRoot.appendChild(wrapper);
            }
        }, [htmlContent]);

        return <div ref={containerRef}></div>;
    };

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
                        <meta property="title" content={metaTitle} />
                        <meta name="description" content={metaDescription} />
                        <meta property="keywords" content={metaKeywords} />
                    </Helmet>
                    <div
                        ref={container}
                        className="relative z-10 isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
                    >
                        <div className="absolute inset-0 -z-10 overflow-hidden">
                            <svg
                                aria-hidden="true"
                                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="50%"
                                        y={-1}
                                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M100 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <svg
                                    x="50%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                />
                            </svg>
                        </div>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
                                <div className="lg:pr-96">
                                    <div className="lg:max-w-none">
                                        <p className="text-4xl/7 mb-6 font-semibold text-indigo-600">
                                            About us
                                        </p>
                                        <h1 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                            {content.title}
                                        </h1>
                                        <p className="mt-4 text-xl/8 text-gray-700">
                                            {content.short_description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-28 flex justify-center gap-3 md:gap-9 md:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                {groupedImages &&
                                    groupedImages.map((group, groupIndex) => (
                                        <div
                                            key={groupIndex}
                                            className={`space-y-4 ${
                                                groupIndex == 1 ? "mt-3" : ""
                                            }`}
                                        >
                                            {group.map((img, index) => (
                                                <img
                                                    key={index}
                                                    alt={`Image ${
                                                        groupIndex * 2 +
                                                        index +
                                                        1
                                                    }`}
                                                    src={`http://127.0.0.1:8000/storage/uploads/content/about-us/${img.image}`}
                                                    className="w-[150px] md:w-[304px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[274px]"
                                                />
                                            ))}
                                        </div>
                                    ))}
                            </div>
                            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div className="lg:pr-4">
                                    <SafeHtml
                                        htmlContent={content.description}
                                    />
                                    <h2 className="mt-16 text-lg font-bold text-gray-500">
                                        The numbers
                                        <div className=" mt-4 mb-2 border-b border-1 border-gray-200"></div>
                                    </h2>
                                    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:items-start lg:gap-y-10">
                                        {content &&
                                            content?.records &&
                                            content?.records.map(
                                                (record, index) => (
                                                    <div className="flex flex-col items-start space-y-2">
                                                        <p className="text-6xl font-bold">
                                                            {record.numbers}
                                                        </p>
                                                        <p className="text-gray-600">
                                                            {record.description}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RoundedTransition container={container} />
                    <Footer />
                </>
            )}
        </>
    );
};

export default AboutUs;
