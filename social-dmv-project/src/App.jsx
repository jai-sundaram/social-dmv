import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
const API_KEY = import.meta.env.VITE_API_KEY


const App = () => {
    const fetchPlaces = async () => {
        try{
            const endpoint = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&lat=36.98844&lon=-121.97483`;
            const response = await fetch(endpoint);
            if(!response.ok){
                throw new Error("Error")
            }
            const data = await response.json();
            console.log(data)
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