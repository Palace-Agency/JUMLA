import React from "react";

const ServiceCard = ({ name, icon, description }) => {
    return (
        <div className="relative pl-16">
            <dt className="text-base font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-200">
                    <img src={icon} className="h-6 w-6 text-white" />
                </div>
                {name}
            </dt>
            <dd className="mt-2 text-base text-gray-600">{description}</dd>
        </div>
    );
};

export default ServiceCard;
