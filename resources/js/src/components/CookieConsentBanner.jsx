import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cookies } from "../constants/images";

const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = useState(() => {
        return localStorage.getItem("cookieConsent") !== "true";
    });

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <Dialog open={isVisible} onClose={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex gap-3">
                        We use cookies <img src={cookies} width={24} />
                    </DialogTitle>
                </DialogHeader>
                <p className="text-sm text-gray-600">
                    We use cookies to improve your experience. By using our
                    site, you agree to our{" "}
                    <Link
                        to={"/privacy-policy"}
                        className="text-blue-500 underline"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
                <DialogFooter className="mt-4">
                    <Button
                        className="focus-visible:ring-0 rounded-xl hover:bg-gray-200"
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Refuse
                    </Button>
                    <Button
                        className="bg-blue-500 text-white hover:bg-blue-600 transition"
                        onClick={handleAccept}
                    >
                        Accept
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CookieConsentBanner;
