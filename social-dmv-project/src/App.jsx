import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API_KEY
const TRIPADVISOR_API_KEY = import.meta.env.VITE_TRIPADVISOR_API_KEY

const App = () => {
    const [message, setMessage] = useState('')
    const [places, setPlaces] = useState([])
    const getPlaces = async () => {
        try{
            const endpoint = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${TOMTOM_API_KEY}&lat=38.89511&lon=-77.03637&categorySet=7315,9379,7373&limit=100`;
            const response = await fetch(endpoint);
            if(!response.ok){
                throw new Error("Error")
            }
            const data = await response.json();
            for (const entry of data){
                console.log(entry.poi.name)
            }
            if(data.response==="False"){
                setMessage("Failed to fetch data")
                setPlaces([])
                return
            }
            setPlaces(data.results || [])
        }
            // eslint-disable-next-line no-unused-vars
        catch(error){

            console.error("Error fetching places...")
        }
    }
    useEffect(() => {
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