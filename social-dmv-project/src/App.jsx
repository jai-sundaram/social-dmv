import React from 'react'

const App = () => {
    return (
        <div className="bg-black w-full h-full">
            <div className="fixed top-0 right-120">
                <img className="" src="logo5.png"/>
            </div>
            <div className="fixed top-80 right-100">
                <h1 className="text-gray-50 font-impact text-9xl">SOCIAL DMV</h1>
            </div>
            <div className="fixed top-120 right-95">
                <h1 className="text-gray-50 font-bebas-neue ">Explore the best restaurants, bars, and clubs and much
                    more in the Washington D.C. area</h1>
            </div>
            <div className="fixed top-135 right-160">
            <button className="h-12 px-6 m-2 bg-linear-65 from-purple-500 to-pink-500 hover:bg-blue-700 text-white font-bold ">
                Button
            </button>
            </div>

        </div>
    )
}
export default App
