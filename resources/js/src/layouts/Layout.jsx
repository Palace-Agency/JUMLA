import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Layout() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="app">
            <motion.div
                className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 origin-left z-50"
                style={{ scaleX }}
            />
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
}
