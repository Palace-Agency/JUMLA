import React, { useRef } from "react";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
    const container = useRef(null);
    return (
        <>
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
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
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
                                <p className="text-base/7 font-semibold text-indigo-600">
                                    About us
                                </p>
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    On a mission to empower remote teams
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque
                                    ullamcorper neque, nibh sem. At arcu, sit
                                    dui mi, nibh dui, diam eget aliquam. Quisque
                                    id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 flex gap-9 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <div className="mt-10 space-y-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                className="w-[304px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[274px]"
                            />
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                className="w-[304px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[274px]"
                            />
                        </div>
                        <div className="space-y-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                className="w-[304px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[274px]"
                            />
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                className="w-[304px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[274px]"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                Our mission
                            </h2>
                            <div className="mt-6 text-lg/7 text-gray-500">
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat.
                                    Dignissim sed eget risus enim. Mattis mauris
                                    semper sed amet vitae sed turpis id. Id
                                    dolor praesent donec est. Odio penatibus
                                    risus viverra tellus varius sit neque erat
                                    velit. Faucibus commodo massa rhoncus,
                                    volutpat. Dignissim sed eget risus enim.
                                    Mattis mauris semper sed amet vitae sed
                                    turpis id.
                                </p>

                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus
                                    commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor fermentum dignissim.
                                    Lacus diam tincidunt ac cursus in vel.
                                    Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac
                                    tempor et ut. Ac lorem vel integer orci.
                                </p>
                            </div>
                            <h2 className="mt-16 text-lg font-bold text-gray-500">
                                The numbers
                                <div className=" mt-4 mb-2 border-b border-1 border-gray-200"></div>
                            </h2>
                            <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:items-start lg:gap-y-10">
                                <div className="flex flex-col items-start space-y-2">
                                    <p className="text-6xl font-bold">$150M</p>
                                    <p className="text-gray-600">Raised</p>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <p className="text-6xl font-bold">20K</p>
                                    <p className="text-gray-600">Companies</p>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <p className="text-6xl font-bold">1.5M</p>
                                    <p className="text-gray-600">Deals</p>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <p className="text-6xl font-bold">200M</p>
                                    <p className="text-gray-600">
                                        Leads Generated
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RoundedTransition container={container} />
            <Footer />
        </>
    );
};

export default AboutUs;
