import React from "react";
// import bey1 from "../../../public/asset/bey1.svg";
import bey1 from "../../../public/asset/bey1.svg";

const MainSection = () => {
    return (
        <div className="flex flex-row h-screen justify-between px-20 py-10 gap-10 font-libre ">
            <div className="caption flex flex-col gap-2 justify-center w-full py-3 px-5 text-base e">
                <span className="text-xl">Hello It's Me</span>
                <span className="text-5xl font-bold">Galih Rizky</span>
                <span className="text-3xl font-bold">
                    And i'm a <span className="text-[#02EBFF]">Programer</span>
                </span>
                <span className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus vitae quos dignissimos amet id quasi vel libero
                    aliquid nulla. Beatae.
                </span>
            </div>

            <div className="img w-full py-3 px-5 ">
                <img src={bey1} />
            </div>
        </div>
    );
};

export default MainSection;
