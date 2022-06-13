import react from "react"
import { Link } from "react-router-dom"
import "../navbar/navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navcontainer">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                <span className="logo">Booking</span>
                </Link>
                <div className="navitem">
                    <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar