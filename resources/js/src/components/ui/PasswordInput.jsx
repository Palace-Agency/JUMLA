import * as React from "react";
import { cn } from "../lib/utils";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = React.forwardRef(
    ({ className, containerStyle, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);
        };

        return (
            <div className={`flex items-center relative ${containerStyle}`}>
                <input
                    type={showPassword ? "text" : "password"}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <div
                    className="absolute right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <FaEyeSlash className="h-4 w-4 opacity-50" />
                    ) : (
                        <FaEye className="h-4 w-4 opacity-50" />
                    )}
                </div>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
