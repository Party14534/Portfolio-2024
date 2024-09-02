"use client";
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import Link from 'next/link';

import icon from './../../../../public/catIcon.png';
import contactImage from './../../../../public/emailIcon.png'
import menu from './../../../../public/menuIcon.png'
import "./navbar.css"
import toast from 'react-hot-toast';


const  Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => {
        setShowMenu(false);
    }
     
    useEffect(() => {
        window.addEventListener("resize", hideMenu);
    }, []);

    function goHome() {
        redirect('/')        
    }

    function contactMe() {
        //window.open('mailto:zachariahdellimore03@gmail.com')
        navigator.clipboard.writeText('zachariahdellimore03@gmail.com')
        toast.success("Email Copied to Clipboard")
    }

    return (
        <nav className="navbar">
            <Link href='/'>
                <img src={icon.src} alt="Logo" onClick={goHome} className="logo" />
            </Link>

            <div className='navSection'>
                <div className="desktopMenu">
                <Link href='/' className="desktopMenuListItem">Home</Link>
                <Link href='/projects' className="desktopMenuListItem">Projects</Link>
                <Link href='/resume' className="desktopMenuListItem">Resume</Link>
                </div>
            </div>
          
            <button className="desktopMenuBtn" onClick={contactMe}>
                <img src={contactImage.src} alt="" className="desktopMenuImg" />Contact Me
            </button>

            <img src={menu.src} alt="Menu" className="mobMenu" onClick={() => {setShowMenu(!showMenu)}}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link href='/' className="desktopMenuListItem">Home</Link>
                <Link href='/projects' className="desktopMenuListItem">Projects</Link>
                <Link href='/resume' className="desktopMenuListItem">Resume</Link>
            </div>
        </nav>
      );
}

export default Navbar;
