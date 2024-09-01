"use client";
import React, { useEffect, useState } from 'react';
import icon from './../../../../public/catIcon.png';
import contactImage from './../../../../public/emailIcon.png'
import menu from './../../../../public/menuIcon.png'
import "./navbar.css"
import Link from 'next/link';


const  Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => {
        setShowMenu(false);
    }
     
    useEffect(() => {
        window.addEventListener("resize", hideMenu);
    }, []);

    return (
        <nav className="navbar">
            <img src={icon.src} alt="Logo" className="logo" />
          
            <div className='navSection'>
                <div className="desktopMenu">
                <Link href='/' className="desktopMenuListItem">Home</Link>
                <Link href='/projects' className="desktopMenuListItem">Projects</Link>
                </div>
            </div>
          
            <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
          }}>
                <img src={contactImage.src} alt="" className="desktopMenuImg" />Contact Me
            </button>

            <img src={menu.src} alt="Menu" className="mobMenu" onClick={() => {setShowMenu(!showMenu)}}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link href='/' className="desktopMenuListItem">Home</Link>
                <Link href='/projects' className="desktopMenuListItem">Projects</Link>
            </div>
        </nav>
      );
}

export default Navbar;
