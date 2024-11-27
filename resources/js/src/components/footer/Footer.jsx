import { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Rounded from "../../common/RoundedButton/Rounded";
import Magnetic from "../../common/Magnetic/Magnetic";
import { Link } from "react-router-dom";
import { useGetSettingQuery } from "../../slices/settingsSlice";
import styles from "./style.module.scss";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About us", href: "/about-us" },
    { title: "Contact us", href: "/contact-us" },
];

const Footer = () => {
    const [settings, setSettings] = useState({
        logo: "",
        email: "",
        phone: "",
        facebook_url: "",
        tiktok_url: "",
        instagram_url: "",
    });

    const { data: setting, isLoading, isSuccess } = useGetSettingQuery("");

    useEffect(() => {
        if (isSuccess) {
            const settingData = setting.entities[1];
            if (settingData) {
                setSettings({
                    logo: settingData.logo,
                    email: settingData.email,
                    phone: settingData.phone,
                    facebook_url: settingData.facebook_url,
                    tiktok_url: settingData.tiktok_url,
                    instagram_url: settingData.instagram_url,
                });
            }
        }
    }, [isSuccess, setting]);

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            {settings.logo && (
                                <img
                                    alt="Logo"
                                    src={`http://127.0.0.1:8000/storage/uploads/settings/${settings.logo}`}
                                />
                            )}
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div
                        style={{ x }}
                        className={styles.buttonContainer}
                    >
                        <Rounded
                            backgroundColor={"#334BD3"}
                            className={styles.button}
                        >
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg
                        style={{ rotate, scale: 2 }}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                            fill="white"
                        />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p>{settings.email}</p>
                    </Rounded>
                    <Rounded>
                        <p>{settings.phone}</p>
                    </Rounded>
                </div>
                <div className="mt-10 p-5 flex-col flex md:flex-row items-center justify-center gap-10">
                    <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
                        Want product news and updates?
                        <br /> Sign up for our newsletter.
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm font-semibold">
                            We care about your data. Read our privacy policy.
                        </p>
                    </div>
                </div>
                <div className="flex items-center mt-16 justify-center gap-9">
                    {navItems.map((item) => (
                        <Magnetic key={item.href}>
                            <Link
                                className="underline font-semibold"
                                to={item.href}
                            >
                                {item.title}
                            </Link>
                        </Magnetic>
                    ))}
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>© 2024 E-JUMLA</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Facebook</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Tiktok</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
