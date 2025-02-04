import React from 'react'
import {Link} from 'react-scroll'
import Info from "./Info.jsx";

const Home = () => {
    return (
        <div className="bg-black w-full h-full">
            <div className="absolute top-0 right-125">
                <img className="" src="logo5.png"/>
            </div>
            <div className="absolute top-80 right-100" id ="home_tag">
                <h1 className="text-gray-50 font-impact text-9xl">SOCIAL DMV</h1>
            </div>
            <div className="absolute top-120 right-95">
                <h1 className="text-gray-50 font-bebas-neue ">Explore the best restaurants, bars, and clubs and much
                    more in the Washington D.C. area</h1>
            </div>

            <div className="absolute top-135 right-143">
                <Link
                    to="info_section"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <button
                        className="h-20 w-62  bg-gradient-to-r from-purple-500 to-pink-500 hover: shadow-lg hover:shadow-fuchsia-300 hover:scale-120 text-white font-bold ">
                        Get Started
                    </button>
                </Link>
            </div>

        </div>
        )
        }
        export default Home
