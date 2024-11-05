import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
