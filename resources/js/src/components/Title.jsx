import React from "react";

const Title = ({ title }) => {
    return (
        <h2 className="text-xl sm:text-center font-semibold text-indigo-600">
            {title}
        </h2>
    );
};

export default Title;
