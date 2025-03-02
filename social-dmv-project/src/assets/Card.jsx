import React, {useEffect} from 'react'
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY


const Card = ({place}) => {
    let price;
    return (
            <div className = "m-4 flex-none w-[calc(33.33%-20px)] max-w-[calc(33.33%-20px)]">
            <div className = " text-2xl rounded-2xl w-full h-120 overflow-hidden shadow-xl border-4 border-fuchsia-300 shadow-white">
                <p className ="font-bold text-gray-50 justify-self-center  mt-10">{place.displayName.text}</p>
                <p className ="font-bold text-gray-50 justify-self-center  mt-2 ml-2 mr-2 font-card-name text-lg">{place.editorialSummary?.text || 'No summary available'}</p>
                <p className ="text-gray-50">More info</p>
            </div>
            </div>
    );
}
export default Card
