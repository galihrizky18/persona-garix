import AboutSection from "@/Components/AboutSection";
import MainSection from "@/Components/MainSection";
import Navbar from "@/Components/Navbar";
import Personality from "@/Components/Personality";
import { Head } from "@inertiajs/react";
import React from "react";

const dashboard = () => {
    return (
        <div className="h-full w-full bg-main text-white font-libre scroll-smooth">
            <Head title="Dshboard" />
            <Navbar />
            <div id="home" className="main">
                <MainSection />
            </div>
            <div id="about" className="aboutSection mt-10">
                <AboutSection />
            </div>
            <div className="personality mt-10">
                <Personality />
            </div>
        </div>
    );
};

export default dashboard;
