import { Link } from "react-router-dom"
import "../searchItem/searchItem.css"

const SearchItem = ({ item }: any) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]}
                alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with air conditioning
                </span>
                <span className="siFeatures">
                    {item.desc}
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cencel later so lock in this great price today
                </span>
            </div>
            <div className="siDetails">
                {item.ratiing && <div className="siRating">
                    <span>Execllent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">{item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SearchItem 