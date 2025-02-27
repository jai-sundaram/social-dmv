import React from 'react'
/*
        <p key = {place.id} className="text-gray-50 font-impact relative left-150 top-50">
            {place.displayName.text}
        </p>
 */
const Card = ({place}) => {
    return (
            <div className = "m-4 flex-none w-[calc(33.33%-20px)] max-w-[calc(33.33%-20px)]">
            <div className = " text-xl rounded-2xl w-[400px] overflow-hidden shadow-xl shadow-white">
                <h1 className = "font-bold text-gray-50"> Place Name: </h1>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
            </div>
            </div>
    );
}
export default Card
