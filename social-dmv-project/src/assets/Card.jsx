import React from 'react'
/*
        <p key = {place.id} className="text-gray-50 font-impact relative left-150 top-50">
            {place.displayName.text}
        </p>
 */
const Card = ({place}) => {
    return (
        <div className = "rounded-2xl w-[400px] overflow-hidden shadow-xl shadow-white">
            <div className = "p-5 text-xl">
                <h1 className = "font-bold text-gray-50"> Place Name: </h1>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
            </div>

        </div>
    );
}
export default Card
