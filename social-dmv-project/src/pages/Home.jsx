import React from 'react'
import {Link} from "react-router-dom";
import Info from "./Info.jsx";

const Home = () => {
    return (
        <div className="bg-black w-full h-full">
            <div className="fixed top-0 right-125">
                <img className="" src="logo5.png"/>
            </div>
            <div className="fixed top-80 right-100">
                <h1 className="text-gray-50 font-impact text-9xl">SOCIAL DMV</h1>
            </div>
            <div className="fixed top-120 right-95">
                <h1 className="text-gray-50 font-bebas-neue ">Explore the best restaurants, bars, and clubs and much
                    more in the Washington D.C. area</h1>
            </div>

            <div className="fixed top-135 right-143">
                <a href="/Info">
                    <button
                        className="h-20 w-62  bg-gradient-to-r from-purple-500 to-pink-500 hover: shadow-lg hover:shadow-fuchsia-300 hover:scale-120 text-white font-bold ">
                        Get Started
                    </button>
                </a>
            </div>

        </div>
        )
        }
        export default Home
