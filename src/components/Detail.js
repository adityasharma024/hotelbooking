import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { doc, getDocs, collection } from "firebase/firestore"
import { addDoc } from "firebase/firestore";
import { auth, database } from "../Firebase/setup";



const Detail = () => {
    const location = useLocation();
    const [review, setReviews] = useState("")
    const [reviewData, setReviewData] = useState([])
    const addReviews = async () => {
        try {
            const userDoc = doc(database, "hotels", `${location.state.id}`);
            const reviewRef = collection(userDoc, "Reviews");
            await addDoc(reviewRef, {
                review: review,
                email: auth.currentUser && auth.currentUser.email,

                proImg: auth.currentUser?.photoURL




            });
        } catch (err) {
            console.log(err);
        }
    };
    const getReviews = async () => {
        const userDoc = doc(database, "Hotels", `${location.state.id}`)
        const reviewRef = collection(userDoc, "Reviews")
        try {
            const data = await getDocs(reviewRef)
            const filteredData = data.docs?.map((doc) => ({
                ...doc.data(),
            }))
            setReviewData(filteredData)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getReviews()
    }, [reviewData])
    return (
        <>
            <Navbar />
            <div className='ml-20 mt-4   text-center '>
                <h1 className='text-3xl font-semibold'>{location.state.name}</h1>
                <div className='flex mt-5'>
                    <img src={location.state.images[0]} className='w-5/12 h-80 rounded-l-xl' />
                    <div>
                        <div className='flex'>
                            <img src={location.state.images[1]} className='w-72 h-36 ml-2' />
                            <img src={location.state.images[2]} className='w-72 h-36 ml-2 rounded-r-xl' />
                        </div>
                        <div className='flex'>
                            <img src={location.state.images[3]} className='w-72 h-40 ml-2 mt-4' />
                            <img src={location.state.images[4]} className='w-72 h-40 ml-2 mt-4 rounded-r-xl' />
                        </div>
                    </div>
                </div>
                <h1 className="text-2x font-semibold mt-7">{location.state.address}</h1>
                <h1 className="">{location.state.persons}guests . {location.state.bedrooms} bedroom . {location.state.beds}bed . {location.state.bathrooms} bathroom </h1>
                <h1 className="font-semibold text-2xl">{location.state.reviewsCount} Reviews </h1>
                <hr className="mt-10" />
                <h1>What this Place Offers</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[1]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[2]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[0]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[3]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[4]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[5]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[6]}</h1>
                <h1 className="mt-3 text-xl font-normal">{location.state.previewAmenities[7]}</h1>
                <hr className="mt-10"></hr>
                <div className="flex items-center">
                    <img src={location.state.hostThumbnail} className="mt-6 w-12 h-12 rounded-full"></img>
                    <h1 className="mt-6 ml-3">{location.state.type}</h1>
                </div>
                <hr className="mt-5" />
                <div className="flex mt-8">
                    <input onChange={(e) => setReviews(e.target.value)} type="text" className="border-b-5 shadow-lg  p-2  text-gray-900 border-x-slate-950 h-12 mt-7" placeholder="Comment"></input>
                    <button onClick={addReviews} className="shadow-2xl  ml-10 text-white bg-black w-14 h-14 border mt-5 border-gray-900 ">Add</button>


                </div>
                <div className="mt-4">
                    {reviewData.map((data) => {
                        return<>
                            <img className="rounded-full w-12 h-12" src={data.proImg} />
                            <h1 className="nl-3">{data.email.substring(0, data.email.indexOf("@"))}</h1>
                        </>

                    })}

                </div>



            </div>
        </>
    );
}
export default Detail;