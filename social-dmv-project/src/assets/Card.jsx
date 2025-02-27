import React, {useEffect} from 'react'
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY

/*
        <p key = {place.id} className="text-gray-50 font-impact relative left-150 top-50">
            {place.displayName.text}
        </p>
 */
const Card = ({place}) => {
    return (
            <div className = "m-4 flex-none w-[calc(33.33%-20px)] max-w-[calc(33.33%-20px)]">
            <div className = " text-xl rounded-2xl w-full h-120 overflow-hidden shadow-xl border-4 border-fuchsia-300 shadow-white">
                <h1 className = "font-bold text-gray-50 justify-self-center  mt-10"> {place.displayName.text}</h1>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
                <p className ="text-gray-50">More info</p>
            </div>
            </div>
    );
}
export default Card
