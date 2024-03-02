import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const SignIn = () => {
    const [email, setEmail] = useState(false);

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 shadow-inner">

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="display: inline items-start">
                            <div className="mt-3 text-center ">
                                <div className="flex items-center justify-center">
                                    <div className="text-2xl font-semibold text-gray-900">X</div>
                                    <h3 className="ml-4 text-base font-semibold leading-6 text-gray-900" id="modal-title">Log In or SignUp to Your Account</h3>
                                </div>
                                <hr className="mt-2 mb-4" />
                                <h1 className="font-semibold text-2xl text-red-500">Welcome to StaySwift</h1>

                                {email ? 
                                    <input 
                                        type="email" 
                                        className="mt-4 w-11/12  ml-4 mr-3 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-50 p-2.5 " 
                                        placeholder="Email" 
                                        fontSize="17px"
                                        
                                    />
                                    :
                                    <PhoneInput 
                                        placeholder="Phone Number" 
                                        inputStyle={{ width: "412px", height: "50px", fontSize: "17px" }} 
                                        className="mt-4 ml-4 mr-3" 
                                    />
                                    
                                }
                                 {email && <input type="password"  className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4  block w-11/12 p-2.5 outline-none" placeholder="Password" required/>}

                                <h1 className="text-xs mt-1">We'll Call or text you to confirm your Number. Standard Privacy Policy</h1>

                                <button className="w-11/12 h-12 mt-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                    {email ? "Agree and Continue": "Continue"}
                                </button>

                                <p className="text-center mt-1">Or</p>

                                <div className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                    <FacebookIcon className="w-6 h-6 ml-4" />
                                    <div className="ml-4">Continue with Facebook</div>
                                </div>

                                <div className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                    <GoogleIcon className="w-6 h-6 ml-4" />
                                    <div className="ml-4">Continue with Google</div>
                                </div>

                                {!email ? 
                                    <div onClick={() => setEmail(true)} className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                        <MailIcon className="w-6 h-6 ml-4" />
                                        <div className="ml-4">Continue with Email</div>
                                    </div>
                                    :
                                    <div onClick={() => setEmail(false)} className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                        <SmartphoneIcon className="w-6 h-6 ml-4" />
                                        <div className="ml-4">Continue with Phone</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
