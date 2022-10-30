import React from 'react';
import './Social_icon.css'
import {
    FaFacebookF, 
    FaLinkedinIn, 
    FaGithub, 
    FaDiscord
    } from "react-icons/fa"

const Socialicon = () => {
    return (
        <div className='ml-[300px]'>
           <div className='wrapper'>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white'>
                <div className='icon block h-[60px] w-[60px] items-center text-center box-border'>
                   <FaFacebookF className='mx-auto inline-block hover:mx-0 hover:ml-1 text-[25px]'/>
                    <span className='text-[20px] hidden font-bold ml-1 '>Facebook</span>
                </div>
            </div>
            {/* <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white'>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px] '>
                    <FaLinkedinIn  className='text-2xl '/>
                    <span className='text-[20px] font-bold ml-3'>LinkedIn</span>
                </div>
                
            </div>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white '>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px]'>
                    <FaGithub className=' text-3xl '/>
                    <span className='text-[20px] font-bold ml-3'>Github</span>
                </div>
            </div>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white '>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px]'>
                    <FaDiscord className=' text-3xl '/>
                    <span className='text-[20px] font-bold ml-3'>Github</span>
                </div>
            </div> */}


           </div>
           <br />
           <br />
           <br />
           <br />
           <br />
           <div className='wrap2 justify-center w-16 h-16 text-center bg-white shadow-slate-300 rounded-full'>
                <div className='icon2 text-center flex'>
                <div className='text-3xl pt-4 rounded-full w-16 pl-4 h-16 inline-blockshadow-sm'> <FaGithub /> </div>
                <span className='hidden text-xl pt-4 font-bold ml-5 '>Github</span>
                </div>
            </div>
        </div>
    );
};

export default Socialicon;

/*
<div className='place-items-center'>
           <div className='wrapper grid grid-cols-5'>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white'>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px]'>
                   <FaFacebookF className=' text-3xl inline-block'/>
                    <span className='text-[20px] '>Facebook</span>
                </div>
            </div>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white hover:flex'>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px] text-center hover:flex justify-center'>
                    <FaLinkedinIn  className=' text-3xl hover:inline inline-block'/>
                    <span className='text-[20px] '>LinkedIn</span>
                </div>
                sdafasdf
            </div>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white '>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px]'>
                    <FaGithub className=' text-3xl inline-block'/>
                    <span className='text-[20px] '>Github</span>
                </div>
            </div>
            <div className='button inline-block h-[60px] w-[60px] m-[0 5px] float-left rounded-[50px] cursor-pointer bg-white '>
                <div className='icon inline-block h-[60px] w-[60px] text-center box-border leading-[60px]'>
                    <FaDiscord className=' text-3xl inline-block'/>
                    <span className='text-[20px] '>Github</span>
                </div>
            </div>
           </div>
        </div>
        */