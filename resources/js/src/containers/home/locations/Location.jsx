import Title from "../../../components/Title";
import React from "react";

const Location = ({ content }) => {
    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto max-w-2xl lg:text-center">
                <Title title={"Our Locations"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    {content?.title}
                </p>
                <p className="mt-6 text-sm sm:text-lg text-gray-600">
                    {content?.description}
                </p>
            </div>
            <div
                data-scroll
                data-scroll-speed={0.02}
                className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
                {content?.locations.map((location) => (
                    <div
                        key={location.id}
                        className="text-center w-full shadow-md py-3 sm:w-48 rounded-xl"
                    >
                        <img
                            alt="Transistor"
                            src={`http://127.0.0.1:8000/storage/uploads/content/landing-page/${location.flag}`}
                            width={158}
                            height={60}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <p className="font-semibold">{location.country}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Location;
