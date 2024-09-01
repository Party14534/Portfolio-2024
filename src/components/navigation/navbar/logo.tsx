"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import catLogo from "./../../../../public/catIcon.png"

const Logo = () => {
    const [width, setWidth] = useState(0);
    const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    const [showButton, setShowButton] = useState(false);

    const changeNavButton = () => {
        if (window.scrollY >= 400 && window.innerWidth < 750) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavButton);
    }, []);

    return (
        <>
            <Link href='/'
            style={{display: showButton ? "none" : "block"}}>
                <Image
                    src={catLogo}
                    alt="Logo"
                    width={100}
                />
            </Link>
        </>
    );
};

export default Logo;
