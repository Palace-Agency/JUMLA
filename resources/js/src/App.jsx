import { AnimatePresence } from "framer-motion";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <>
            <AnimatePresence mode="wait">
                <RouterProvider router={router} />
            </AnimatePresence>
        </>
    );
}

export default App;
