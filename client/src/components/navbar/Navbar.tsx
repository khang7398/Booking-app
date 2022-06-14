import react, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "../navbar/navbar.css"

const Navbar = () => {
    const { user } = useContext<any>(AuthContext);
    return (
        <div className="navbar">
            <div className="navcontainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Booking</span>
                </Link>
                {user ? user.username : (
                    <div className="navitem">
                        <button className="navBtn">Register</button>
                        <button className="navBtn">Login</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar