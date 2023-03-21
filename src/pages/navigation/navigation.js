import React ,{useState,useEffect} from 'react'
import './navigation.css'
import { NavLink } from 'react-router-dom'
const Navigation = ({open,inClose}) => {
    const [close,setClose] = useState(true);
   console.log(inClose)
    return (
         <div className={open ? "navigation" : "navigation-closed"}>
            <div className='navigation-links'>
                <ul>
                    <NavLink to='/About'><li className='navigation-link'onClick={inClose} >About</li></NavLink>
                    <NavLink to='/Menu'><li className='navigation-link' onClick={inClose}>Menu</li></NavLink>
                    <NavLink to='/'><li className='navigation-link'onClick={inClose} >Reservation</li></NavLink>
                    <NavLink to='/contact-Us'><li className='navigation-link' onClick={inClose}>Contact</li></NavLink>
                </ul>
            </div>
            <div className='navigation-social-links'>
                <a href='/#'>Faceboock</a>
                <a href='/#'>Instragram</a>
            </div>
        </div>
    )
}

export default Navigation