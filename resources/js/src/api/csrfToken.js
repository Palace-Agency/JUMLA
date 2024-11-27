import axios from "axios";

const axiosClient = axios.create({
    baseURL: "/",
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCsrfToken = async () => {
    return await axiosClient.get("/sanctum/csrf-cookie");
};
