import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PropTypes from "prop-types";
import { signInWithPopup, getAuth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/setup";





const SignIn = (props) => {
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");
    const [email1,setEmail1]=useState("");
    const [passowrd,setPassword]=useState("");




    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };
    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)

        }
        catch (err) {
            console.error(err)
        }


    }
    const verifyOtp = async () => {
        try {
            await user.confirm(otp);


        }
        catch (err) {
            console.error(err);

        }


    }
    const emailSignIn=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email1,passowrd);

        }catch(err){
            console.error(err);            
        }
    
    }

    return (
        <>   
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-stone-700 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 shadow-inner">

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="display: inline items-start">
                            <div className="mt-3 text-center ">
                                <div onClick={() => props.setShowSignIn(false)} className="text-2xl font-semibold cursor-pointer  mr-96 ml-auto -mt-0.5 text-gray-900">X</div>

                               <div className="flex items-center justify-center">
                                    <h3 className="ml-4 text-base font-semibold leading-6 border-b  mr-3 mt-4  text-gray-900" id="modal-title">{!phone ?"Confirm Your Phone Number":"Log In or SignIn to Your Account"}</h3>
                                </div>

                                <h1 className="font-semibold text-2xl text-red-500"> {!phone && `Welcome to StaySwift`}</h1>
                                

                                {email ?
                                    <input
                                        onChange={(e)=>setEmail1(e.target.value)}
                                        type="email"
                                        className="mt-4 w-11/12  ml-4 mr-3 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-50 p-2.5 "
                                        placeholder="Email"
                                        fontSize="17px"

                                    />
                                    :
                                    <PhoneInput
                                        value={phone}
                                        onClick={() => setPhone("+" + phone)}
                                        placeholder="Phone Number"
                                        inputStyle={{ width: "412px", height: "50px", fontSize: "17px" }}
                                        className="mt-4 ml-4 r-3"
                                    />

                                }
                                <div id='recaptcha' className="mt-3 ml-5 "></div>
                                {phone && <button onClick={sendOtp} className="w-11/12 h-12 mt-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                    Send OTP
                                </button>}
                                {user && <input
                                    type="email"
                                    className="mt-4 w-11/12  ml-4 mr-3 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-50 p-2.5 "
                                    placeholder="Otp"
                                    fontSize="17px"
                                    onChange={(e) => setOtp(e.target.value)}

                                />}
                                {otp && <button onClick={verifyOtp} className="w-11/12 h-12 mt-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                    Verify OTP
                                </button>}

                                {email && <input onChange={(e)=>setPassword(e.target.value)} type="password" className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4  block w-11/12 p-2.5 outline-none" placeholder="Password" required />}

                                <h1 className="text-xs mt-1">We'll Call or text you to confirm your Number. Standard Privacy Policy</h1>

                                {!phone && <button onClick={emailSignIn} className="w-11/12 h-12 mt-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                    {email ? "Agree and Continue" : "Continue"}
                                </button>}

                                <p className="text-center mt-1">Or</p>

                                {!phone && <div className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                    <FacebookIcon className="w-6 h-6 ml-4" />
                                    <div className="ml-4">Continue with Facebook</div>
                                </div>}

                                {!phone && <div onClick={googleSignin} className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                    <GoogleIcon className="w-6 h-6 ml-4" />
                                    <div className="ml-4">Continue with Google</div>
                                </div>}

                                {!email ?
                                    <div onClick={() => setEmail(true)} className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                        <MailIcon className="w-6 h-6 ml-4" />
                                        <div className="ml-4">Continue with Email</div>
                                    </div>
                                    :
                                    <div onClick={() => setEmail(false)}  className="w-11/12 h-10 mt-2 ml-4 flex items-center border border-spacing-1 rounded-xl border-black cursor-pointer hover:text-white hover:bg-red-500">
                                        <SmartphoneIcon className="w-6 h-6 ml-4" />
                                        <div className="ml-4">Continue with Phone</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}
SignIn.propTypes = {
    setShowSignIn: PropTypes.any,
};

export default SignIn;
