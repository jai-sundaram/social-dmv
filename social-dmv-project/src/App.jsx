import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import error from "eslint-plugin-react/lib/util/error.js";
import Card from "./assets/Card.jsx";
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY
const App = () => {
    const [placesList, setPlacesList] = useState([])
    const [error, setError] = useState('')
    const base = "https://places.googleapis.com/v1/places:searchNearby"
    const getPlaces = async () => {
        const body = {
            "includedTypes": ["art_gallery","museum","aquarium","casino","comedy_club","cultural_center","dance_hall","dog_park","garden","internet_cafe","karaoke","movie_theater","night_club","park","skateboard_park","video_arcade","bagel_shop","bakery","cafe","coffee_shop","chocolate_shop","bar","bar_and_grill","restaurant","juice_shop","tea_house","yoga_studio","shopping_mall"],



            "maxResultCount": 20,
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": 38.9175,
                        "longitude": -77.0281},
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
                        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.currentOpeningHours,places.priceLevel,places.websiteUri,places.id,places.editorialSummary,places.priceRange,places.rating,places.userRatingCount,places.nationalPhoneNumber,places.websiteUri"
                    },
                    body: JSON.stringify(body)
                }
                )
            const data = await response.json()
            if (data.response === 'False'){
                setPlacesList([]);
            }
            console.log(data.places)
            setPlacesList(data.places)

        }
            // eslint-disable-next-line no-unused-vars
        catch(error){
            console.log('there was an error');
            setError('Could not get data')
        }



    }

    useEffect( () => {
        getPlaces()
    }, [])
    return (
        <div className = "overflow-x-hidden">
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
                        offset={80}
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
                {error ? (
                        <p className="text-gray-50 font-impact relative left-150 top-50">There is an error!</p>
                    ):
                    (
                        <div className ="text-gray-50 font-impact relative top-50 overflow-x-hidden">
                        <ul className="flex flex-wrap gap-20 justify-center max-w-screen">
                            {placesList.map((place)=> (
                                <Card key = {place.id} place = {place} />
                            ))}
                        </ul>
                        </div>
                    )
                }

            </div>
            </div>
        </div>
        </div>
    )
}

export default App