import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
