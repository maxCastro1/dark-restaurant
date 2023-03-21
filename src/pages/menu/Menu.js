import React, { useState, useCallback } from 'react';
import Item from './item'
import data from './data'
import './menu.css'
const Menu = () => {
    
    const [type,setType] = useState("Mains");
    const [menuItems, setMenuItems] = useState(data.Mains);
    const [highlight,setHighlight] = useState(data.Mains[0]);
    const [original,setOriginal] = useState(true)
    const hover = (e) => {
    const value = e.target.textContent;
     
       setMenuItems(data[value])
       setHighlight(data[value][0]);
       setOriginal(true);
       setType(value)
    
    }
  
    const select = useCallback((x) => {
        setHighlight(x);
        setOriginal(false);
      }, []);
    return (
        <div className='menu' id='Menu'>
            <div className='menu-nav'>
                <h1>Menu</h1>
                <div className='menu-nav-links'>
                    <ul>
                        <button onClick={(e)=>hover(e)} >
                            <li  className={type === "Starters" ?  "menu-nav-links-button active-button" : "menu-nav-links-button"}>Starters</li>
                        </button>
                        <button onClick={(e)=>hover(e)}>
                            <li className={type === "Mains" ?  "menu-nav-links-button active-button" : "menu-nav-links-button"}>Mains</li>
                        </button>
                        <button onClick={(e)=>hover(e)} >
                            <li className={type === "Steaks" ?  "menu-nav-links-button active-button" : "menu-nav-links-button"}>Steaks</li>
                        </button>
                        <button onClick={(e)=>hover(e)} >
                            <li className={type === "Sides" ?  "menu-nav-links-button active-button" : "menu-nav-links-button"}>Sides</li>
                        </button>
                        <button onClick={(e)=>hover(e)} >
                            <li className={type === "Desserts" ?  "menu-nav-links-button active-button" : "menu-nav-links-button"}>Desserts</li>
                        </button>
                    </ul>
                </div>
             </div>
                <div className='menu-body'>
                    <h4>{type}</h4>
                    <div className='menu-body-items-cont'>
                        <div  className='menu-body-item-cont'>
                           {menuItems.map((dish,index)=>{
                            return <Item props={dish} key={index} select={select}/>
                           })}
                        </div>
                        <div className='menu-body-item-cont-special'>
                            <div className='menu-body-item-cont-special-left'>
                                <h4>{original ? "HIGHLIGHT" : type }</h4>
                                <Item props={highlight}/>
                            </div>
                            <div className='menu-body-item-cont-special-right'>
                                <img src={highlight.pic} alt=""/>
                            </div>
                            
                            
                        </div>
                        <div className='menu-body-item-cont-special duplicate'>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Menu