import React from "react";
import { cn } from "./lib/utils";

const Title = ({ title, className }) => {
    return (
        <h2
            className={cn(
                "text-xl sm:text-center font-semibold text-indigo-600",
                className
            )}
        >
            {title}
        </h2>
    );
};

export default Title;
