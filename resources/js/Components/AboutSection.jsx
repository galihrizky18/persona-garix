import React from "react";
import bey2 from "../../../public/asset/bey2.svg";

const AboutSection = () => {
    return (
        <div className=" flex flex-row justify-between px-20 py-10 gap-10 font-libre">
            <div className="img w-full ">
                <img src={bey2} alt="" />
            </div>
            <div className="caption w-full flex flex-col gap-2 justify-center ">
                <span className="text-5xl font-bold">
                    About <span className="text-[#02EBFF]">Me</span>
                </span>
                <span className="text-3xl">Programer</span>
                <span className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    ab distinctio ut odit eius, modi vero quidem perspiciatis
                    itaque voluptate.
                </span>
            </div>
        </div>
    );
};

export default AboutSection;
