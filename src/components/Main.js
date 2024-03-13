// Main.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import SignIn from "./SignIn";
import Login from "./Login";
import Home from "./Home";
import PropTypes from "prop-types";

const Main = (props) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [hotels, setHotels] = useState([]);
    const [currency,setCurrency]=useState("")
    const [place,setPlace]=useState("");
    const [date,setDate]=useState("");
    const [guests,setGuest]=useState("");

    const getHotel = async () => {
        const url = `https://airbnb13.p.rapidapi.com/search-location?location="Paris"&checkin=2024-09-16&checkout=2024-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=${currency ??"USD"}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ee603a129amsh7fca336e271d5cdp1681d8jsnc7c037269d99',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setHotels(data.results);
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {

        getHotel();
    }, [guests,place,date])
    return (
        <>
            <div className="">
                <Navbar
                    setCurrency={setCurrency}
                    setShowSignIn={setShowSignIn}
                    setShowLogin={setShowLogin}
                    setDate={setDate}
                    setPlace={setPlace}
                    setGuest={setGuest}
                />
    
                <Menubar></Menubar>
            </div>
            {showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
            {showLogin && <Login setShowLogin={setShowLogin} />}
            <Home hotels={hotels} currency={props.currency}></Home>
        </>
    );
    
   
    
}
Main.propTypes = {
    setHotels: PropTypes.any,
};





export default Main;
