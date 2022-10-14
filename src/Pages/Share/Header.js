import React from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <header className='z-50 w-screen p-6 px-16'>
            {/*Desktop & Tablet   */}
            <div className='hidden md:flex justify-between'>
                <div className='flex gap-3 items-center cursor-pointer'>
                    <img src='https://i.ibb.co/5xGqjWX/logo.png' className='w-8' alt='' />
                    <p className='text-lg text-headingColor font-bold'>BroRest</p>
                </div>
                <div className='flex gap-8'>
                <ul className='flex gap-8 mr-3 items-center ml-auto '>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Home</Link>
                    <Link to="/menu" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Menu</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>About Us</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Service</Link>
                </ul>
                <div className='items-center justify-center cursor-pointer relative flex'>
                    <FaShoppingCart className='text-2xl'/>
                    <div className=' relative justify-center items-center h-5 w-5 -top-3 -left-2 rounded-full flex bg-[#FF0000]'>
                        <p className='text-xs text-white font-semibold'> 1  </p>
                    </div>
                </div>
                <motion.img whileTap={{scale: 0.5}}
                src='https://i.ibb.co/Wfdz7Ks/Avatar-Profile-PNG-Pic.png' className='w-10 h-10 min-h-[40px] min-w-[40px]' alt=''/>
                </div>
            </div>
        </header>
    );
};

export default Header;