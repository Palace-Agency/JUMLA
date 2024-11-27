import React, { useEffect } from "react";
import { useState, useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton/Rounded";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/Nav";
import CustomizeLink from "../navbar/Link/CustomizeLink";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetSettingQuery } from "../../slices/settingsSlice";
import { Skeleton } from "../ui/skeleton";
import { useSelector } from "react-redux";
import AuthAvatar from "./auth/AuthAvatar";

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
];

const Navbar = () => {
    const [settings, setSettings] = useState({
        logo: "",
    });

    const { data: setting, isLoading, isSuccess } = useGetSettingQuery("");

    useEffect(() => {
        if (isSuccess) {
            const settingData = setting.entities[1];
            if (settingData) {
                setSettings({
                    logo: settingData.logo,
                });
            }
        }
    }, [isSuccess, setting]);
    const [isActive, setIsActive] = useState(false);
    const button = useRef(null);
    const pathname = useLocation();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.user);

    useLayoutEffect(() => {
        if (window.innerWidth > 1024) {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(button.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 0,
                    end: window.innerHeight,
                    onLeave: () => {
                        gsap.to(button.current, {
                            scale: 1,
                            duration: 0.25,
                            ease: "power1.out",
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(
                            button.current,
                            { scale: 0, duration: 0.25, ease: "power1.out" },
                            setIsActive(false)
                        );
                    },
                },
            });
        }
    }, []);

    const handleLoginCLick = () => {
        navigate("/login");
    };
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Jumla</span>
                        {isLoading ? (
                            <Skeleton className="h-8 w-[113px]" />
                        ) : (
                            <img
                                alt="Logo"
                                src={`http://127.0.0.1:8000/storage/uploads/settings/${settings.logo}`}
                                className="h-8 w-auto"
                            />
                        )}
                    </a>
                </div>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className="hidden lg:flex lg:gap-x-12"
                >
                    {navItems.map((data, index) => {
                        return (
                            <CustomizeLink
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></CustomizeLink>
                        );
                    })}
                </div>
                {isAuthenticated ? (
                    <div className="flex flex-1 lg:justify-end gap-3">
                        <AuthAvatar />
                    </div>
                ) : (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLoginCLick}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </motion.button>
                    </div>
                )}
            </nav>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={`${styles.button}`}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ""
                        }`}
                    ></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </header>
    );
};

export default Navbar;
