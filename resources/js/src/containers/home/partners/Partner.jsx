import { motion } from "framer-motion";
import Title from "../../../components/Title";
import { ameex, dhl, maersk, shopify } from "../../../constants/partners";
import React from "react";

const partners = [ameex, dhl, maersk, shopify];

const Partner = () => {
    const totalLogoWidth = partners.length * 100;

    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto py-10 sm:py-32 max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto mb-16 max-w-2xl lg:text-center">
                <Title title={"Our Partners"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    Trusted by the world’s most innovative companies
                </p>
            </div>
            <div
                data-scroll
                data-scroll-speed={0.02}
                className="mx-auto mt-10 overflow-hidden"
            >
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: [0, -200] }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    style={{
                        display: "flex",
                        whiteSpace: "nowrap",
                        width: `${totalLogoWidth * 4}px`,
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <img
                            alt="partner"
                            key={index}
                            src={partner}
                            width={100}
                            height={100}
                            className="max-h-12 w-full object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Partner;
