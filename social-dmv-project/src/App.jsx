import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import axios from 'axios';
const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API_KEY
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY
const App = () => {
    const [places, setPlaces] = useState([])
    const base = "https://places.googleapis.com/v1/places:searchNearby\n"
    const getPlaces = async () => {
        const body = {
            "includedTypes": ["restaurant"],
            "maxResultCount": 20,
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": 37.7937,
                        "longitude": -122.3965},
                    "radius": 500.0
                }
            }
        };
        try{
            const response = await fetch(base, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "X-Goog-Api-Key": GOOGLE_KEY,
                        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.currentOpeningHours,places.priceLevel,places.websiteUri,places.photos"
                    },
                    body: JSON.stringify(body)
                }
                )
            const data = await response.json()
            console.log(data)


        }
            // eslint-disable-next-line no-unused-vars
        catch(error){
            console.log('there was an error');
        }


    }

    useEffect( () => {
        getPlaces()
    }, [])
    return (
        <div className="bg-black w-full min-h-screen">
            <div className="h-screen">
                <div>
                    <div className = "relative left-140">
                        <img src="logo5.png" alt="Logo" />
                    </div>

                    <div className="mt-0 relative left-100">
                        <h1 className="text-gray-50 font-impact text-9xl">SOCIAL DMV</h1>
                    </div>

                    <div className="mt-6 relative left-100">
                        <h1 className="text-gray-50 font-bebas-neue">
                            Explore the best restaurants, bars, and clubs and much
                            more in the Washington D.C. area
                        </h1>
                    </div>
                </div>
                <div className="relative left-150 mb-20 mt-15">
                    <Link
                        to="info-section"
                        spy={true}
                        smooth={true}
                        offset={120}
                        duration={1000}
                    >
                        <button className="h-20 w-62 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-fuchsia-300 hover:scale-110 text-white font-bold">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>

            <div  className="h-screen">
            <div id="info-section">
                <h1 className="text-gray-50 font-impact text-9xl  relative left-150 top-20">TEST</h1>
            </div>
            </div>
        </div>
    )
}

export default App