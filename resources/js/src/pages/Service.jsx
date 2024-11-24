import React, { useEffect, useRef, useState } from "react";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";
import usePageTracking from "../components/hooks/use-page-tracking";
import { useGetServiceContentQuery } from "../slices/serviceContentSlice";
import { Helmet } from "react-helmet-async";
import LoadingPage from "../components/Loading/LoadingPage";

const Service = () => {
    const [metaTitle, setMetaTitle] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [content, setContent] = useState({});
    const {
        data: serviceContent,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetServiceContentQuery("");

    useEffect(() => {
        if (isSuccess && serviceContent) {
            const serviceData =
                serviceContent?.entities[
                    Object.keys(serviceContent.entities)[0]
                ];
            if (serviceData) {
                setMetaTitle(serviceData.meta_title || "");
                setMetaKeywords(serviceData.meta_keywords || "");
                setMetaDescription(serviceData.meta_description || "");
                const { sections } = serviceData;
                console.log(sections);

                sections.forEach((section) => {
                    setContent(section.content);
                });
            }
        }
    }, [isSuccess, serviceContent]);

    const container = useRef(null);
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
                            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div className="lg:pr-4">
                                    <div className="lg:max-w-lg">
                                        <p className="text-4xl/7 mb-6 font-semibold text-indigo-600">
                                            Services
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
                            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <img
                                    alt=""
                                    src="https://freefrontend.com/assets/img/tailwind-dashboards/dashboard-template.jpg"
                                    className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                />
                            </div>
                            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div className="lg:pr-4">
                                    <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: content.description,
                                            }}
                                        ></div>
                                        <ul
                                            role="list"
                                            className="mt-8 space-y-8 text-gray-600"
                                        >
                                            {content &&
                                                content?.services &&
                                                content?.services.map(
                                                    (feauture, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex gap-x-3"
                                                        >
                                                            <img
                                                                src={`http://127.0.0.1:8000/storage/uploads/content/service/${feauture.icon}`}
                                                                className="mt-1 h-5 w-5 flex-none  text-indigo-600"
                                                            />
                                                            <span>
                                                                <strong className="font-semibold text-gray-900">
                                                                    {
                                                                        feauture.title
                                                                    }
                                                                </strong>{" "}
                                                                {
                                                                    feauture.description
                                                                }
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
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

export default Service;
