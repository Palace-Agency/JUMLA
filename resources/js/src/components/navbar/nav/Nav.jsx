import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../animation";
import { useLocation } from "react-router-dom";
import CustomizeLink from "../Link/CustomizeLink";
import Footer from "../Footer/Footer";
import Curve from "../Curve/Curve";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "About us",
        href: "/about-us",
    },
    {
        title: "Contact us",
        href: "/contact-us",
    },
    {
        title: "Login",
        href: "/login",
    },
    {
        title: "Register",
        href: "/register",
    },
];

export default function Nav() {
    const pathname = useLocation();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <CustomizeLink
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                                isMobile
                            ></CustomizeLink>
                        );
                    })}
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    );
}
