import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile)
    }

    const handleClick = (e, href) => {
        e.preventDefault();
        const tragetElement = document.querySelector(href);
        if (tragetElement) {
            const offset = -85;
            const elementPosition = tragetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMobile(false)
    }
    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50 mb-4'>
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-between gap-6'>
                        <div>
                            <a href="#">
                                <img src={logo} width={100} alt="" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>{NAVIGATION_LINKS.map((item, index) => {
                                return <li key={index}>
                                    <a className='text-medium font-semibold text-white hover:text-[#01ff96]' href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.label}</a>
                                </li>
                            })}</ul>
                        </div>
                    </div>
                </div>
                {/* MOBILE MENU */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#">
                                <img src={logo} width={90} alt="" />
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>{isMobile ? (<FaTimes className='m-2 h-6 w-5'/>):(<FaBars className='m-2 h-6 w-5'/>)}</button>
                        </div>
                    </div>
                    {isMobile && (
                        <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                            {NAVIGATION_LINKS.map((item,index)=>{
                                return <li key={index}>
                                    <a href={item.href} className='block w-full text-lg' onClick={(e)=>handleClick(e,item.href)}>{item.label}</a>
                                </li>
                            })}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
