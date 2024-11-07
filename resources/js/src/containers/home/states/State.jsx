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

const State = () => {
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
                        Trusted by creators worldwide
                    </p>
                    <p className="mt-6 text-sm sm:text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consect adipisicing possimus.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="mx-auto border border-1 border-orange-300 px-10 py-5 rounded-xl flex max-w-xs flex-col gap-y-4"
                            >
                                <dt className="text-base/7 text-gray-600">
                                    {stat.name}
                                </dt>
                                <dd className="flex items-center gap-3 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    <stat.icon />
                                    {isInView && (
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={2}
                                            separator=","
                                        />
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
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
