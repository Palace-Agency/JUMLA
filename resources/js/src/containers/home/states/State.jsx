import React, { useRef } from "react";
import Title from "../../../components/Title";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";

const stats = [
    { id: 1, name: "A client we deal with", value: 1200, icon: CiUser },
    { id: 2, name: "Factory visited", value: 100, icon: IoStorefrontOutline },
    { id: 3, name: "Imported container", value: 46000, icon: FiPackage },
];

const State = ({ content }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="relative isolate py-10 sm:py-32">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div
                ref={ref}
                data-scroll
                data-scroll-speed={0.1}
                className="mx-auto max-w-7xl px-6 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:text-center">
                    <Title title={"Our track record"} />
                    <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        {content?.title}
                    </p>
                    <p className="mt-6 text-sm sm:text-lg text-gray-600">
                        {content?.description}
                    </p>
                </div>
                <div className=" flex justify-center mt-16  sm:mt-20 ">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 rounded-3xl md:grid-cols-2 lg:grid-cols-4">
                        {content?.track_records.map((stat) => (
                            <div
                                key={stat.id}
                                className="items-center min-w-[150px] shadow-md aspect-[1155/678] justify-center px-10 py-5 rounded-xl flex flex-col gap-y-4 "
                            >
                                <div className="text-base/7 text-gray-600">
                                    {stat.record_title}
                                </div>
                                <div className="flex items-center gap-3 order-first text-2xl text-gray-900 sm:text-5xl">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/uploads/content/landing-page/${stat.icon}`}
                                        className="h-12 w-12"
                                    />
                                    {isInView && (
                                        <CountUp
                                            start={0}
                                            end={stat.record_number}
                                            duration={2}
                                            separator=","
                                            className="text-3xl"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
};

export default State;
