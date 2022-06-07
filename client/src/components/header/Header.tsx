import React, { useState } from "react";
import '../header/header.css'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {DateRange} from "react-date-range"
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = ({type}: any) =>{
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions]= useState(false)
    const [options, setOptions]= useState<any>({
        adult:1 ,
        children: 0,
        room: 1,
    })

    const handleOption = (name: any, operation: any) =>{
            setOptions((prev : any) =>{
                return{
                    ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1  
                }
         })
    }
    return(
        <div className="header">
            <div className={type ==="list" ? "headerContainer lisMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                    </div>

                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                    </div>

                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                    </div>

                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                    </div>
                </div>
                {
                    type !== "list" &&
                <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels - unclock instant savings of 10% or more with a free booking acount</p>
                <button className="headerBtn">Sign in/ Register</button>
                <div className="headerSearch">
                    
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input type="text" 
                        placeholder="where are you going?" 
                        className="headerSearchInput"/>
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText" > {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                       {openDate &&  <DateRange
                        editableDateInputs={true}
                        onChange={(item : any) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult}  adult + ${options.children} children +${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <div className="optionCounter">
                                    <span className="optionText">Adult</span>
                                    <button
                                    disabled={options.adult <= 1} 
                                    className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>  
                            </div>
                            <div className="optionItem">
                                <div className="optionCounter">
                                        <span className="optionText">children</span>
                                            <button
                                            disabled={options.children <= 0}  
                                            className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                        </div> 
                                </div>
                            <div className="optionItem">
                                <div className="optionCounter">
                                    <span className="optionText">room</span>
                                    <button
                                    disabled={options.room <= 1}  
                                    className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}

export default Header