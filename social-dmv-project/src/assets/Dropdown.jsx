import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineSearch} from "react-icons/ai";

const Dropdown = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className = "w-120 font-medium h-80 ">
            <div
                onClick={()=>setOpen(!open)}
                className = "bg-black border-4 border-fuchsia-300 text-white  w-full p-2 flex items-center justify-between rounded">
                Select Category
                <BiChevronDown />
            </div>
            <ul className = {`bg-black   mt-2 overflow-y-auto ${open? "max-h-80": "max-h-0"}`}>
                <div>
                <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Aquarium</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Art Gallery</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Bakery</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Bagel Shop</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Bar</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Bar And Grill</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Cafe</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Casino</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Chocolate Shop</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Comedy Club</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Cultural Center</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Dance Hall</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Dog Park</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Garden</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Internet Cafe</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Juice Shop</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Karaoke</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Movie Theater</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Night Club</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Park</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Restaurant</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Shopping Mall</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Skateboard Park</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Tea House</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Video Arcade</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white">Yoga Studio</li>




                </div>



            </ul>
        </div>
    )
}
export default Dropdown
