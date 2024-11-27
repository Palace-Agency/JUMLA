import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../../common/RoundedButton/Rounded";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import { useMediaQuery } from "../../../components/hooks/use-media-query";
import { cn } from "../../../components/lib/utils";

const AboutUs = ({ content }) => {
    const isMobile = useMediaQuery("(max-width: 1150px)");
    const phrase = content?.title;
    const description = useRef(null);
    const isInView = useInView(description);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about-us");
    };
    return (
        <>
            {isMobile ? (
                <>
                    <div className="mx-auto pt-16 sm:pt-40 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <Title title={"About us"} />
                            <p className="mb-5 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {phrase}
                            </p>
                            <Link
                                to={"about-us"}
                                className="rounded-md z-10 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Title className={"pt-10 sm:pt-32"} title={"About us"} />
                    <div
                        ref={description}
                        data-scroll
                        data-scroll-speed={0.2}
                        className={cn(
                            styles.description,
                            "container mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-center"
                        )}
                    >
                        <div className={styles.body}>
                            <p>
                                {phrase?.split(" ").map((word, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={styles.mask}
                                        >
                                            <motion.span
                                                variants={slideUp}
                                                custom={index}
                                                animate={
                                                    isInView ? "open" : "closed"
                                                }
                                                key={index}
                                            >
                                                {word}
                                            </motion.span>
                                        </span>
                                    );
                                })}
                            </p>
                            <motion.p
                                variants={opacity}
                                animate={isInView ? "open" : "closed"}
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    WebkitLineClamp: 5,
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {content?.description}
                            </motion.p>

                            <div onClick={handleClick}>
                                <Rounded className={styles.button}>
                                    <p>More</p>
                                </Rounded>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AboutUs;
