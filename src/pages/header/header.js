import './header.css'
import { useState,useCallback } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import {GrClose } from "react-icons/gr";
import { NavLink } from 'react-router-dom'

import Navigation from '../navigation/navigation';
const Header = () =>{
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false);

    const inClose = useCallback(() => {
       setOpen(false);
      }, []);
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    return(
        <>
         <div className={scroll ? "nav-bar open" : "nav-bar" }>
         <NavLink to='/'><p>Just Meat.</p></NavLink>
            <button onClick={()=>{setOpen(!open)}}>{open ? <GrClose/>:<HiMenuAlt4/>}</button>
        </div>
        <Navigation open={open} inClose={inClose}/>
        </>
         
    )
}
export default Header