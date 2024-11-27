import React, { useRef } from "react";
import SignInAuthForm from "../components/authentication/SignInAuthForm";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";

const Login = () => {
    const container = useRef(null);
    return (
        <>
            <div
                ref={container}
                className=" relative z-10 bg-white px-6 lg:px-8 p-10"
            >
                <div className="mx-auto mt-32 w-[40%] rounded-xl p-10 shadow-xl">
                    <SignInAuthForm />
                </div>
                <RoundedTransition container={container} />
            </div>
            <Footer />
        </>
    );
};

export default Login;
