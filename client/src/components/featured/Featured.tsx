import React from "react";
import "../featured/featured.css"
const Featured = () =>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://thuysanvietnam.com.vn/wp-content/uploads/2020/10/vinh-ha-long.jpg" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://thuysanvietnam.com.vn/wp-content/uploads/2020/10/vinh-ha-long.jpg" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Austin</h1>
                    <h2>456 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://thuysanvietnam.com.vn/wp-content/uploads/2020/10/vinh-ha-long.jpg" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>us</h1>
                    <h2>789 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured