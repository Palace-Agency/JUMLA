import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
    const location = useLocation();
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        const handlePageEnter = () => setStartTime(Date.now());
        const handlePageExit = async () => {
            const endTime = Date.now();
            const timeSpent = endTime - startTime;

            // Send data to the server
            console.log(location.pathname, timeSpent);
            // await fetch("/api/track-page", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         page: location.pathname,
            //         timeSpent, // Time spent in milliseconds
            //     }),
            // });
        };

        handlePageEnter();
        return handlePageExit;
    }, [location]);
};

export default usePageTracking;
