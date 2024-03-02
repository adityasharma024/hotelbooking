import React from "react";
import logo from "../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center border-b shadow-lg border-gray-300 p-4">
            {/* Logo */}
            <img src={logo} className="w-24 h-8 mb-4 md:mb-0 md:ml-10"></img>

            {/* Search and Navigation */}
            <div className="ml-5 md:ml-96 flex  border border-gray-300 justify-center items-center rounded-3xl p-1 shadow-lg cursor-pointer">
                <div className='test-sm rounded-3xl w-28 p-2.5 flex text-neutral-950 '>Add Place <div className="ml-3">|</div></div>
                <div className='test-sm rounded-3xl w-28 p-2.5 flex text-neutral-950'>Add Date<div className="ml-3">|</div></div>
                <div className='test-sm rounded-3xl w-28 p-2.5 flex text-gray-300'>Add Guest </div>
                <SearchIcon className="bg-red-400 rounded-full mr-3 object-center"></SearchIcon>
            </div>

            {/* User Navigation */}
            <div className="flex flex-col md:flex-row justify-end items-center w-full mt-4 md:mt-0 ">
                <div className="mr-5 border-none rounded-full p-4 font-bold hover:bg-slate-300">
                    Add your home
                </div>

                <LanguageIcon className="ml-3 cursor-pointer"></LanguageIcon>

                <div className="flex items-center border border-spacing-1 rounded-full p-2 ml-7">
                    <MenuIcon className="w-5 h-5"></MenuIcon>
                    <div className="flex mb-1 ml-3 shadow-slate-500 text-gray-200">|</div>
                    <AccountCircleIcon className="w-5 h-5 ml-3"></AccountCircleIcon>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
