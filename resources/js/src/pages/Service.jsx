import React, { useRef } from "react";
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    ArrowPathIcon,
    FingerPrintIcon,
} from "@heroicons/react/20/solid";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";

const features = [
    {
        name: "Sourcing",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Import",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
        icon: LockClosedIcon,
    },
    {
        name: "Wholesale",
        description:
            "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
        icon: ArrowPathIcon,
    },
    {
        name: "Confirm orders",
        description:
            "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
        icon: FingerPrintIcon,
    },
    {
        name: "Canning",
        description:
            "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
        icon: ArrowPathIcon,
    },
    {
        name: "Wrapping and packaging",
        description:
            "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
        icon: FingerPrintIcon,
    },
];
const Service = () => {
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
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-4xl/7 mb-6 font-semibold text-indigo-600">
                                    Services
                                </p>
                                <h1 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                    A better workflow
                                </h1>
                                <p className="mt-4 text-xl/8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque
                                    ullamcorper neque, nibh sem. At arcu, sit
                                    dui mi, nibh dui, diam eget aliquam. Quisque
                                    id at vitae feugiat egestas.
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
                                <ul
                                    role="list"
                                    className="mt-8 space-y-8 text-gray-600"
                                >
                                    {features.map((feauture, index) => (
                                        <li className="flex gap-x-3">
                                            <feauture.icon
                                                aria-hidden="true"
                                                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            />
                                            <span>
                                                <strong className="font-semibold text-gray-900">
                                                    {feauture.name}
                                                </strong>{" "}
                                                {feauture.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
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
                        </div>
                    </div>
                </div>
            </div>
            <RoundedTransition container={container} />
            <Footer />
        </>
    );
};

export default Service;
