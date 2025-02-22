import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
const API_BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const PROXY_URL = "https://corsproxy.io/?";
const API_KEY = "blank"
const CORS_KEY = "temp_6be3ba18cf776d492692658de45722ca";  // CORS Shifter key
const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        "x-cors-api-key": CORS_KEY
    }
}

const App = () => {
    const fetchPlaces = async () => {
        try{
            const endpoint = `${PROXY_URL}${API_BASE_URL}/search?includedTypes=restaurant&maxResultCount=10&latitude=37.7937&longitude=-122.3965&radius=500.0`;
            const response = await fetch(endpoint, API_OPTIONS);
            // eslint-disable-next-line no-unused-vars
        }catch(error){
            console.error("Error fetching places...")
        }
    }
    useEffect(() => {
        fetchPlaces()

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