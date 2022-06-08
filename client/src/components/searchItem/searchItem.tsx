import "../searchItem/searchItem.css"

const SearchItem = () =>{
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/214039630.webp?k=f199b305df8970945623dcf1e0b87606a78c4ab1baf38e45383be8df86d58583&o=&s=1" 
            alt="" className="siImg"/>
            <div className="siDesc">
                 <h1 className="siTitle">Tower Street Apartment</h1>
                 <span className="siDistance">500m from center</span>
                 <span className="siTaxiOp">Free airport taxi</span>
                 <span className="siSubtitle">
                    Studio Apartment with air conditioning
                 </span>
                 <span className="siFeatures">
                    Entire studio • 1 bathroom • 15m²
                 </span>
                 <span className="siCancelOp">Free cancellation</span>
                 <span className="siCancelOpSubtitle">
                    You can cencel later so lock in this great price today
                 </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Execllent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>

        </div>
    )
}

export default SearchItem