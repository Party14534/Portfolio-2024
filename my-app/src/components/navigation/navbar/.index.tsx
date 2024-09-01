"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './logo'

const Navbar = () => {
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
            <div className='w-full h-20 bg-zinc-900 sticky top-0'>
                <Logo />
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex justify-between items-center h-full'>
                        <ul className='md:flex gap-x-6 text-white'>
                            <li>
                                <Link href='/'>
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href='/projects'>
                                    <p>Projects</p>
                                </Link>
                            </li>
                        </ul>
                        <p style={{display: showButton ? "none" : "none"}}></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
