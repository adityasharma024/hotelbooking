import React from "react";
import room from '../images/rooms.jpg';
import { Link } from "react-router-dom";
import { doc, setDoc,addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import {database} from '../Firebase/setup'

const Home = (props) => {
  const addHotels = async (data) => {
    try {
      const hotelsCollection = collection(database, "Hotels",`${data.id}`);
      await addDoc(hotelsCollection, {
        details: data && data,
      });
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  return (
    <div className="grid grid-cols-4">
      {props.hotels.map((data) => (
        <Link to="/detail" key={data.id} state={data}>
          <div className="justify-center flex transition-transform transform hover: scale-100" key={data.id}>
            <div className="max-w-sm rounded-xl overflow-hidden w-72 h-96 ml-11 mt-20 bg-red-300 hover:bg-gray-400">
              <img className="w-72  h-60 rounded-xl" src={data.images[0]} alt="Sunset in the mountains" />
              <div className="py-1 ml-4">
                <h1 className="font-semibold">{data.address}</h1>
                <p className="text-gray-700 text-sm">
                  {data.name}
                </p>
                <h1 className="text-gray-500 text-sm">{data.type}</h1>
                <h1 className="font-semibold"> {props.currency}{data.price.rate}</h1>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
