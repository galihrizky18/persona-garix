import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <div className="flex  flex-row items-center justify-between fixed top-0 z-[10000] w-full px-10 h-14 bg-main">
            <div className="judul text-3xl font-bold font-ralewy">Persona</div>
            <div className="menu">
                <ul className="flex flex-row gap-5 text-base">
                    <li>
                        <Link
                            href="#home"
                            className="hover:text-sky-600 hover:font-bold"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            className="hover:text-sky-600 hover:font-bold "
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-sky-600 hover:font-bold">
                            Personality
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-sky-600 hover:font-bold">
                            Goals
                        </Link>
                    </li>
                    <li>
                        <Link classID="hover:text-sky-600 hover:font-bold">
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
