import React, {useEffect} from 'react'
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY


const Card = ({place}) => {
    const startPrice = place?.priceRange?.startPrice?.units;
    const endPrice = place?.priceRange?.endPrice?.units;
    const rating =  place.rating;
    const ratingCount = place.userRatingCount;
    const status = place?.currentOpeningHours?.openNow


    const showPrice = () => {
        if (startPrice && endPrice){
            return <p className = "font-palatino text-gray-50 mt-2 ml-2 mr-2 text-lg">Price range: ${startPrice} - ${endPrice}</p>

        }
        else{
            return <p className = "font-palatino text-gray-50 mt-2 ml-2 mr-2 text-lg">Accurate price info not provided.</p>
        }
    }
    const showRatings = ()=>{
        if(rating && ratingCount){
            return <p className = "font-palatino text-gray-50 mt-2 ml-2 mr-2 text-lg">Customer ratings: {rating} ({ratingCount} reviews)</p>

        }
        else{
            return <p className = "font-palatino text-gray-50 mt-2 ml-2 mr-2 text-lg">Rating information not provided.</p>

        }
    }
    const placeStatus = () =>{
        if(status){
            if(status === true){
                return <p className = "font-palatino text-green-600 mt-2 justify-self-center text-lg">Open</p>
            }
            else if(status === false){
                return <p className = "font-palatino text-red-700 mt-2 justify-self-center text-lg">Closed</p>
            }
        }
        else{
            return <p className = "font-palatino text-gray-600 mt-2 justify-self-center text-lg">Status Unknown</p>

        }

    }
    return (
            <div className = "m-4 flex-none w-[calc(33.33%-20px)] max-w-[calc(33.33%-20px)]">
            <div className = " text-2xl rounded-2xl w-full h-120 overflow-hidden shadow-xl border-4 border-fuchsia-300 shadow-white">
                <p className ="font-bold text-gray-50 justify-self-center  mt-10">{place.displayName.text}</p>
                <div>{placeStatus()}</div>
                <p className ="font-lucida-handwriting text-gray-50 justify-self-center  mt-2 ml-2 mr-2 font-card-name text-lg ">{place.editorialSummary?.text || 'No summary available'}</p>
                <div>{showPrice()}</div>
                <div>{showRatings()}</div>
            </div>
            </div>
    );
}
export default Card
