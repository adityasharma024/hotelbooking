import React from "react";
import camping from '../images/camping.png';
import house from '../images/house.png';
import cabin from '../images/cabin.png';
import view from '../images/view.png';
import room from '../images/room.png';
import skiing from '../images/top.png';
import container from '../images/container.png';
import top from '../images/top.png';

const Menubar = () => {
    return (
        <div className="flex mt-5 space-x-7 ml-4 md:ml-8 lg:ml-11 overflow-x-auto">
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={house} className="h-6 w-6" alt="House Icon" />
                <h1 className="text-xs  font-semibold">Houses</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={camping} className="h-6 w-6" alt="Camping Icon" />
                <h1 className="text-xs  font-semibold">Camping</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={top} className="h-6 w-6" alt="Top Icon" />
                <h1 className="text-xs  font-semibold">Top</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={view} className="h-6 w-6" alt="View Icon" />
                <h1 className="text-xs  font-semibold">View</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={container} className="h-6 w-6" alt="Container Icon" />
                <h1 className="text-xs   font-semibold">Container</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={cabin} className="h-6 w-6" alt="Cabin Icon" />
                <h1 className="text-xs  font-semibold">Cabin</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={room} className="h-6 w-6" alt="Rooms Icon" />
                <h1 className="text-xs  font-semibold">Rooms</h1>
            </div>
            <div className="hover:border-b-4 rounded-t-sm border-red-500">
                <img src={skiing} className="h-6 w-6" alt="Skiing Icon" />
                <h1 className="text-xs  font-semibold">Skiing</h1>
            </div>
        </div>
    );
}

export default Menubar;
