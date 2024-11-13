import React from "react";
import styles from "./header.module.scss";
import {
    call_center,
    fast,
    importing,
    inventory,
    packaging,
    sourcing,
} from "../../../constants/images";
import Magnetic from "../../../common/Magnetic/Magnetic";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const images = [call_center, fast, importing, inventory, sourcing, packaging];
const Header = () => {
    return (
        <div className="relative isolate px-6 pt-8 lg:px-8">
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
            <div data-scroll data-scroll-speed="0.3" className={styles.plane}>
                {images.map((img, key) => (
                    <Magnetic>
                        <motion.img
                            initial={{
                                transform: "translateZ(8px) translateY(-2px)",
                            }}
                            animate={{
                                transform: "translateZ(32px) translateY(-8px)",
                            }}
                            transition={{
                                repeat: Infinity,

                                repeatType: "mirror",

                                duration: 2,

                                ease: "easeInOut",
                            }}
                            src={img}
                            key={key}
                            alt="image"
                            width={60}
                        />
                    </Magnetic>
                ))}
            </div>

            <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
                <div
                    data-scroll
                    data-scroll-speed="0.2"
                    className="text-center"
                >
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Services to enrich your online business
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        We seek to provide you with the services necessary to
                        advance your business and develop your projects in the
                        world of e-commerce.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="rounded-md z-10 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </motion.button>
                        <Link className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
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

export default Header;
