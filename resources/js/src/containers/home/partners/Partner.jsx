import Title from "../../../components/Title";
import React, { useEffect, useRef } from "react";

const Partner = ({ content }) => {
    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            const clone = ul.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            ul.parentNode.appendChild(clone);
        }
    }, []);

    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto py-10 sm:py-32 max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto mb-16 max-w-2xl lg:text-center">
                <Title title={"Our Partners"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    {content?.title}
                </p>
            </div>
            <div
                data-scroll
                data-scroll-speed={0.02}
                className="w-full inline-flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] flex-nowrap mt-10"
            >
                <ul
                    ref={logosRef}
                    className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll"
                >
                    {...content?.partners.map((partner, index) => (
                        <li className="w-32 h-32 flex items-center">
                            <img
                                alt="partner"
                                key={index}
                                src={`http://127.0.0.1:8000/storage/uploads/content/landing-page/${partner.logo}`}
                                width={100}
                                height={100}
                                className="w-full"
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
                    {...content?.partners.map((partner, index) => (
                        <li className="w-32 h-32 flex items-center">
                            <img
                                alt="partner"
                                key={index}
                                src={`http://127.0.0.1:8000/storage/uploads/content/landing-page/${partner.logo}`}
                                width={100}
                                height={100}
                                className="w-full"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Partner;
