import React from "react";
import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const RoundedTransition = ({ container }) => {
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
    return (
        <motion.div style={{ height }} className={styles.circleContainer}>
            <div className={styles.circle}></div>
        </motion.div>
    );
};

export default RoundedTransition;
