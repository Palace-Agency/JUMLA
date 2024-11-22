import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTimeTrackingMutation } from "../../slices/timeTrackingSlice";

const usePageTracking = () => {
    const [tracking] = useTimeTrackingMutation();
    const [country, setCountry] = useState(null);
    const location = useLocation();
    const page = location.pathname;
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(
                    "https://api.ipgeolocation.io/ipgeo?apiKey=05d0ba008c444a46a26a3ceb8290663e"
                );
                const data = await response.json();
                setCountry(data.country_name);
            } catch (error) {
                console.error("Error fetching geolocation:", error);
            }
        };

        fetchCountry();

        const handlePageEnter = () => setStartTime(Date.now());

        const handlePageExit = async () => {
            const endTime = Date.now();
            const timeSpent = endTime - startTime;

            if (country) {
                await tracking({ page, timeSpent, country }).unwrap();
            } else {
                console.warn("Country not available during page exit");
            }
        };

        handlePageEnter();
        return handlePageExit;
    }, [location, country, tracking]);
};

export default usePageTracking;
