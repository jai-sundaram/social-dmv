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
        <div className = " ">

        </div>
    )
}
export default Dropdown
