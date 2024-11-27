import { createSlice } from "@reduxjs/toolkit";
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

const getAuthenticated = () => {
    return JSON.parse(window.localStorage.getItem("AUTHENTICATED"));
};

export const getUser = () => {
    return JSON.parse(secureLocalStorage.getItem("USER"));
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: getUser(),
        isAuthenticated: getAuthenticated(),
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload;
            setAuthenticated(true);
            setUser(user);
            state.error = null;
        },
        clearCredentials: (state) => {
            setAuthenticated(false);
            setUser(null);
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setCredentials, clearCredentials, setError } = userSlice.actions;

export default userSlice;
