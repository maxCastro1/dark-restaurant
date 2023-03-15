import './header.css'
import { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import {GrClose } from "react-icons/gr";

import Navigation from '../navigation/navigation';
const Header = () =>{
    const [open, setOpen] = useState(false)
    return(
        <>
         <div className='nav-bar'>
            <p>Just Meat.</p>
            <button onClick={()=>{setOpen(!open)}}>{open ? <GrClose/>:<HiMenuAlt4/>}</button>
        </div>
        <Navigation props={open}/>
        </>
         
    )
}
export default Header