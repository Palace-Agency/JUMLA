import React from "react";
import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

const spinnerVariants = (show) =>
    `flex-col items-center justify-center ${show ? "flex" : "hidden"}`;

const loaderVariants = (size) => {
    const sizes = {
        small: "size-6",
        medium: "size-8",
        large: "size-12",
    };
    return `animate-spin text-primary ${sizes[size] || sizes["medium"]}`;
};

export function Spinner({ size = "medium", show = true, children, className }) {
    return (
        <span className={spinnerVariants(show)}>
            <Loader2 className={`${loaderVariants(size)} ${className || ""}`} />
            {children}
        </span>
    );
}
