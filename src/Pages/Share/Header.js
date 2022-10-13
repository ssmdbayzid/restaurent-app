import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/*Desktop & Tablet   */}
            <div className='hidden md:flex '>
                <div className='flex gap-5 items-center'>
                    <img src='https://i.ibb.co/5xGqjWX/logo.png' className='w-10' alt='' />
                    <p className='text-xl text-headingColor font-bold'>BroRest</p>
                </div>
                <ul className='flex gap-6 items-center ml-auto '>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Home</Link>
                    <Link to="/menu" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Menu</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>About Us</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Service</Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;