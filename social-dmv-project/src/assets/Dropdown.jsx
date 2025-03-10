import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineSearch} from "react-icons/ai";

const Dropdown = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    function handleSelect(category){
        setValue(category);
        setOpen(false);
        console.log(category); // Log the selected value immediately
    }
    return (
        <div className = "w-120 font-medium h-80 ">
            <div
                onClick={()=>setOpen(!open)}
                className = "bg-black border-4 border-fuchsia-300 text-white  w-full p-2 flex items-center justify-between rounded">
                Select Category
                <BiChevronDown />
            </div>
            <ul className = {`bg-black   mt-2 overflow-y-auto ${open? "max-h-80": "max-h-0"}`}>
                <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("aquarium")}>Aquarium</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("art_gallery")}>Art Gallery</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("bakery")}>Bakery</li>
                    <li className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("bagel_shop")}>Bagel Shop</li>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("bar")}>Bar</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("bar_and_grill")}>Bar And Grill</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("cafe")}>Cafe</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("casino")}>Casino</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("chocolate_shop")}>Chocolate Shop</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("comedy_club")}>Comedy Club</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("cultural_center")}>Cultural Center</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("dance_hall")}>Dance Hall</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("dog_park")}>Dog Park</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("garden")}>Garden</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("internet_cafe")}>Internet Cafe</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("juice_shop")}>Juice Shop</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("karaoke")}>Karaoke</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("movie_theater")}>Movie Theater</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("night_club")}>Nightclub</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("park")}>Park</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("restaurant")}>Restaurant</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("shopping_mall")}>Shopping Mall</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("skateboard_park")}>Skateboard Park</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("tea_house")}>Tea House</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("video_arcade")}>Video Arcade</option>
                    <option className = "p-2 text-sm hover:bg-fuchsia-300 text-white" onClick= {()=> handleSelect("yoga_studio")}>Yoga Studio</option>


            </ul>
        </div>
    )
}
export default Dropdown
