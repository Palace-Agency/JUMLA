import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../../../slices/userSlice";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "../../lib/utils";
import React from "react";
import { useMediaQuery } from "../../hooks/use-media-query";

const AuthAvatar = ({ className }) => {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const firstName = user?.first_name;
    const lastName = user?.last_name;
    const email = user?.email;
    const avatar =
        firstName && lastName
            ? firstName.charAt(0).toUpperCase() +
              lastName.charAt(0).toUpperCase()
            : email?.charAt(0).toUpperCase();
    const handleLogOut = () => {
        dispatch(clearCredentials());
        window.location.reload();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn("focus-visible:outline-none", className)}
            >
                {isDesktop ? (
                    <div className="flex items-center justify-evenly bg-orange-600 rounded-full w-[74px] h-[40px]">
                        <Avatar className="w-[35px] h-[35px]">
                            <AvatarFallback className="bg-indigo-500 text-white font-semibold">
                                {avatar}
                            </AvatarFallback>
                        </Avatar>
                        <LuChevronDown className="text-indigo-500" />
                    </div>
                ) : (
                    <Avatar className="w-[35px] h-[35px]">
                        {user?.image ? (
                            <AvatarImage src={user?.image.path} alt="avatar" />
                        ) : (
                            <AvatarFallback className="bg-indigo-200 text-white font-semibold">
                                {avatar}
                            </AvatarFallback>
                        )}
                    </Avatar>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-3">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a
                        className="w-full hover:text[var(--primary-color-one)]"
                        href={"/dashboard"}
                    >
                        Dashboard
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Button
                        onClick={handleLogOut}
                        className="bg-transparant text-[var(--primary-color-one)] p-0 border-0 hover:bg-transparant flex justify-start font-normal w-full h-fit"
                    >
                        Sign Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AuthAvatar;
