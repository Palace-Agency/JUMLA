import { createSlice } from "@reduxjs/toolkit";
// import { googleLogout } from "@react-oauth/google";
import secureLocalStorage from "react-secure-storage";
const setAuthenticated = (isAuthenticated) => {
    window.localStorage.setItem(
        "AUTHENTICATED",
        JSON.stringify(isAuthenticated)
    );
};

const setUser = (user) => {
    secureLocalStorage.setItem("USER", JSON.stringify(user) || null);
};

const setToken = (token) => {
    window.localStorage.setItem("TOKEN", JSON.stringify(token) || null);
};

const getAuthenticated = () => {
    return JSON.parse(window.localStorage.getItem("AUTHENTICATED"));
};

export const getUser = () => {
    return JSON.parse(secureLocalStorage.getItem("USER"));
};

export const getToken = () => {
    return JSON.parse(window.localStorage.getItem("TOKEN"));
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: getUser(),
        token: getToken(),
        isAuthenticated: getAuthenticated(),
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            setAuthenticated(true);
            setUser(user);
            setToken(token);
            state.error = null;
        },
        clearCredentials: (state) => {
            setAuthenticated(false);
            setUser(null);
            setToken(null);
            state.error = null;
            // googleLogout();
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setCredentials, clearCredentials, setError } = userSlice.actions;

export default userSlice;
