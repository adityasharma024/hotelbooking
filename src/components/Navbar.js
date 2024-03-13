import React, { useState } from "react";
import airbnb from "../images/stay1.png";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import SignIn from "./SignIn";
import Globe from "./Globe";
import earth from '../images/earth.png'

import Login from '../components/Login';

import Swift from "../images/swift_logo_svg.png";

const Navbar = ({ setShowSignIn, setShowLogin,setCurrency,setDate,setPlace,setGuest }) => {
    const [popUp, setPopUp] = useState(false);
    const [sign, setSign] = useState(false);

    const [log, setLog] = useState(false);
    const [globe, setGlobe] = useState(false)


    return (
        <div className="flex flex-col md:flex-row items-center border-b shadow-lg border-gray-300 p-4">
            {/* Logo */}
            <img src={airbnb} className="w-24 h-24 mb-4 md:mb-0 "></img>
            <img src={Swift} className="w-24 h-14 mb-4 md:mb-0 ml-0 "></img>


            {/* Search and Navigation */}
            <div  className="ml-5 md:ml-96 flex  border border-gray-300 justify-center items-center rounded-3xl p-1 shadow-lg cursor-pointer">
                <div onChange={(e)=>setPlace(e.target.value)} className='test-sm rounded-3xl w-28 p-2.5 flex text-neutral-950 '>Add Place <div className="ml-3">|</div>  </div>
                <div onChange={(e)=>setDate(e.target.value)} className='test-sm rounded-3xl w-28 p-2.5 flex text-neutral-950'>Add Date<div className="ml-3">|</div></div>
                <div onChange={(e)=>setGuest(e.target.value)} className='test-sm rounded-3xl w-28 p-2.5 flex text-gray-300'>Add Guest </div>
                <SearchIcon className="bg-red-400 rounded-full mr-3 object-center"></SearchIcon>
            </div>

            {/* User Navigation */}
            <div className="flex flex-col md:flex-row justify-end items-center w-full mt-4 md:mt-0 ">
                <div className="mr-5 border-none rounded-full p-4 font-bold hover:bg-slate-300">
                    Add your home
                </div>

                <img onClick={()=>setGlobe(true)} src={earth} className='w-4 h-4  cursor-pointer' />

                <div onClick={() => setPopUp(!popUp)} className="flex  cursor-pointer items-center border border-spacing-1 rounded-full p-2 ml-7">
                    {popUp && <div className="shadow-xl h-16 w-28 z-10 absolute bg-white  mt-44 p-1 mr-1">
                        <h1 onClick={() => setShowSignIn(true)} className="font-semibold text-sm">SignIn</h1>
                        <hr className="mt-2" />
                        <h1 onClick={() => setShowLogin(true)} className="font-thin text-sm">Login</h1>

                    </div>}
                    <MenuIcon className="w-5 h-5"></MenuIcon>
                    <div className="flex mb-1 ml-3 shadow-slate-500 text-gray-200">|</div>
                    <AccountCircleIcon className="w-5 h-5 ml-3"></AccountCircleIcon>
                </div>


            </div>
            {sign && <SignIn setSign={setShowSignIn} />}
            {log && <Login setLog={setShowLogin} />}
            {globe && <Globe setGlobe={setGlobe} setCurrency={setCurrency}></Globe>}


        </div>
    );
}

export default Navbar;
