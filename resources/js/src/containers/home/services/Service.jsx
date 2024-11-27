import Title from "../../../components/Title";
import ServiceCard from "./components/ServiceCard";
import { arrow } from "../../../constants/logo";
import { useNavigate } from "react-router-dom";
import Rounded from "../../../common/RoundedButton/Rounded";
import styles from "./style.module.scss";
import React from "react";

const Service = ({ content }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact-us");
    };
    return (
        <div className="bg-white pt-10 sm:pt-32">
            <div
                data-scroll
                data-scroll-speed={0.2}
                className="mx-auto relative max-w-7xl px-6 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:text-center">
                    <img
                        className="hidden lg:block absolute right-0"
                        src={arrow}
                        alt="arrow"
                    />
                    <Title title={"Services"} />
                    <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        {content?.title}
                    </p>
                    <p className="mt-6 text-sm sm:text-lg text-gray-600">
                        {content?.description}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {content?.services.map((feature, index) => (
                            <ServiceCard
                                key={index}
                                name={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </dl>
                </div>
                <div onClick={handleClick}>
                    <Rounded className={styles.button}>
                        <p>Contact us</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
};

export default Service;
