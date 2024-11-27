import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    useBlogTimeTrackingMutation,
    useTimeTrackingMutation,
} from "../../slices/timeTrackingSlice";

const useBlogTracking = () => {
    const [blogTracking] = useBlogTimeTrackingMutation();
    const [country, setCountry] = useState(null);
    const location = useLocation();
    const blog = location.pathname;
    const blogSlug = blog.replace(/^\/blogs\//, "");
    const [startTime, setStartTime] = useState(Date.now());

    const getOrCreateVisitorId = () => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
        };

        let visitorId = getCookie("visitor_id");

        if (!visitorId) {
            visitorId = uuidv4();
            document.cookie = `visitor_id=${visitorId}; path=/; max-age=${
                60 * 60 * 24 * 365
            }; SameSite=Strict`;
        }

        return visitorId;
    };

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

            const visitorId = getOrCreateVisitorId();

            if (country) {
                await blogTracking({
                    blogSlug,
                    timeSpent,
                    country,
                    visitorId,
                }).unwrap();
            } else {
                console.warn("Country not available during page exit");
            }
        };

        handlePageEnter();
        return handlePageExit;
    }, [location, country, blogTracking]);
};

export default useBlogTracking;
