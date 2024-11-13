import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../animation";
import { Link } from "react-router-dom";
import React from "react";

export default function CustomizeLink({
    data,
    isActive,
    setSelectedIndicator,
    isMobile,
}) {
    const { title, href, index } = data;

    return (
        <motion.div
            className={styles.link}
            onMouseEnter={() => {
                setSelectedIndicator(href);
            }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className={
                    isMobile ? styles.mobile_indicator : styles.indicator
                }
            ></motion.div>
            <Link to={href}>{title}</Link>
        </motion.div>
    );
}
