import React from 'react'
import './navigation.css'
const Navigation = (open) => {
    console.log(open.props)
    return (
         <div className={open.props ? "navigation" : "navigation-closed"}>
            <div className='navigation-links'>
                <ul>
                    <a href='/#'><li className='navigation-link'>About</li></a>
                    <a href='/#'><li className='navigation-link'>Menu</li></a>
                    <a href='/#'><li className='navigation-link'>Reservation</li></a>
                    <a href='/#'><li className='navigation-link'>Contact</li></a>
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