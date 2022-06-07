import react from "react"
import "../navbar/navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navcontainer">
                <span className="logo">Booking</span>
                <div className="navitem">
                    <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar