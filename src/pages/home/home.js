
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './home.css'
import { FiArrowRightCircle } from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const Home = () => {
    const [value, setValue] = useState(new Date());
    const [dateOption, setDateOption] = useState("");
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState(1);
    useEffect(() => {
        setOpen(false)
    }, [value])
    const handleTimeChange = () => {
        console.log(typeof value);
      
        const size = JSON.stringify(value);
        const myArray = size.split("T");
        console.log(myArray)
        alert(` reservation set on the ${myArray[0]} for ${number} people at ${dateOption} P.M , thank you`)
        setDateOption("")
        setNumber(1);
        

    }
    const handleSub = (e) => {
        e.preventDefault()
        setDateOption(e.target.value)
    }

    return (
        <div className='home'>
            <div className='home-cont'>
                <div className='home-cont-middle'>
                    <h1> Can We Just Meat?</h1>
                    <div className='home-cont-middle-social'>
                        <a href='/#'>Faceboock</a>
                        <a href='/#'>Instragram</a>
                    </div>
                </div>
                <div className='home-cont-bottom'>
                    <a href='/#' className='home-cont-bottom-left'>
                        <span>View our menu</span>
                        <button className='home-cont-bottom-left-icon'><FiArrowRightCircle /></button>
                    </a>
                    <div className='home-cont-bottom-right'>
                        <div className='home-cont-bottom-right-forms'>
                            <span>Select date</span>
                            <button onClick={() => setOpen(!open)}>
                                {open ? <BiChevronUp /> : <BiChevronDown />}
                            </button>
                            {open && <Calendar onChange={setValue} value={value} className={open ? "open" : ""} />}
                        </div>   
                            <form className='home-cont-bottom-right-forms'>        
                                    <span>Select time</span>
                                    <select value={dateOption} onChange={(e) => handleSub(e)} className="s">
                                        <option value="" disabled="disabled" className='x'>P.M</option>
                                        <option value="1"className='x'>1</option>
                                        <option value="2"className='x'>1-30</option>
                                        <option value="3"className='x'>2</option>
                                        <option value="4"className='x'>2-30</option>
                                        <option value="4"className='x'>3</option>
                                        <option value="4"className='x'>3-30</option>
                                        <option value="4"className='x'>4</option>
                                        <option value="4"className='x'>4-30</option>
                                        <option value="4"className='x'>5</option>
                                        <option value="4"className='x'>5-30</option>
                                        <option value="4"className='x'>6</option>
                                        <option value="4"className='x'>6-30</option>
                                        <option value="4"className='x'>7</option>
                                        <option value="4"className='x'>7-30</option>
                                        <option value="4"className='x'>8</option>
                                        <option value="4"className='x'>8-30</option>
                                        <option value="4"className='x'>9</option>
                                        <option value="4"className='x'>9-30</option>
                                        <option value="4"className='x'>10</option>
                                        <option value="4"className='x'>10-30</option>
                                    </select>
                            </form>        
                            <form className='home-cont-bottom-right-forms'>
                                <span>Table of</span>
                                    <input type="number"
                                    min={1}
                                     value={number}
                                    onChange={(e) => setNumber(e.target.value)} />
                            </form>
                    
                        <div>
                            <button id='home-cont-bottom-right-special-btn' onClick={handleTimeChange}>Make a reservation</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home