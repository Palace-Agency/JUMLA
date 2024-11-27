import { AnimatePresence } from "framer-motion";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <>
            <Provider store={store}>
                <HelmetProvider>
                    <AnimatePresence mode="wait">
                        <RouterProvider router={router} />
                    </AnimatePresence>
                    <Toaster richColors />
                </HelmetProvider>
            </Provider>
            ;
        </>
    );
}

export default App;
