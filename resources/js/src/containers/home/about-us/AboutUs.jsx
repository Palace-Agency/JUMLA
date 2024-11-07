import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../../common/RoundedButton/Rounded";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import { useMediaQuery } from "../../../components/hooks/use-media-query";

const AboutUs = () => {
    const isMobile = useMediaQuery("(max-width: 1150px)");
    const phrase =
        "We work to facilitate entry and prosperity in the field of e-commerce for individuals and companies in the Middle East, China and beyond.";
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
                    <div className="mx-auto pt-16 sm:pt-32 max-w-7xl px-6 lg:px-8">
                        <div
                            data-scroll
                            data-scroll-speed={0.1}
                            className="mx-auto max-w-2xl lg:text-center"
                        >
                            <Title title={"About us"} />
                            <p className="text-2xl mb-5">{phrase}</p>
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
                <div ref={description} className={styles.description}>
                    <div
                        data-scroll
                        data-scroll-speed={0.1}
                        className={styles.body}
                    >
                        <Title title={"About us"} />
                        <p>
                            {phrase.split(" ").map((word, index) => {
                                return (
                                    <span key={index} className={styles.mask}>
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
                                WebkitLineClamp: 2,
                                textOverflow: "ellipsis",
                            }}
                        >
                            E-JUMLA is a Moroccan company specialized in
                            providing a full range of basic services and
                            solutions for companies operating in the field of
                            e-commerce. E-JUMLA is a Moroccan company
                            specialized in providing a full range of basic
                            services and solutions for companies operating in
                            the field of e-commerce.
                        </motion.p>

                        <div onClick={handleClick}>
                            <Rounded className={styles.button}>
                                <p>More</p>
                            </Rounded>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutUs;
