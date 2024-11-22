import axios from "axios";

export const getGoogleData = async (token) => {
    return await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
