import Title from "../../../components/Title";
import ServiceCard from "./components/ServiceCard";
import { arrow } from "../../../constants/logo";
import { useNavigate } from "react-router-dom";
import Rounded from "../../../common/RoundedButton/Rounded";
import styles from "./style.module.scss";
import {
    call_center,
    fast,
    importing,
    inventory,
    packaging,
    sourcing,
} from "../../../constants/images";
import React from "react";

const features = [
    {
        name: "Sourcing",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
        icon: sourcing,
    },
    {
        name: "Import",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
        icon: importing,
    },
    {
        name: "Wholesale",
        description:
            "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
        icon: fast,
    },
    {
        name: "Confirm orders",
        description:
            "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
        icon: call_center,
    },
    {
        name: "Canning",
        description:
            "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
        icon: inventory,
    },
    {
        name: "Wrapping and packaging",
        description:
            "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
        icon: packaging,
    },
];

const Service = () => {
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
                    <img className="absolute right-0" src={arrow} alt="arrow" />
                    <Title title={"Services"} />
                    <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Everything you need to advance your business
                    </p>
                    <p className="mt-6 text-sm sm:text-lg text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget
                        aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <ServiceCard
                                key={index}
                                name={feature.name}
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
