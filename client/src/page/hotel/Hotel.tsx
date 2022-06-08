import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../hotel/hotel.css"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/mailList"
import Navbar from "../../components/navbar/Navbar"



const Hotel = () =>{

    const photos = [
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/214039630.jpg?k=6a1244895b1cc6eb92c60cff23b05908b9b22d0004aed9240832ff7a28b81ae6&o=&hp=1"
        },

        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/138583835.jpg?k=f91e8078b9f2e5227a35753e8575cccd8462e8cbe3dbe5d68db312746e88969d&o=&hp=1"
        },

        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/138555050.jpg?k=039ca9e9a5731393eaf850a36ccd2cd22de12ba2ce8f1359d8d8685a95e5ee24&o=&hp=1"
        },

        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/138589026.jpg?k=5810fc9a497ddc00b074f6e31b8e2d96b4b92aec5bf111dcf42846424ba0c88c&o=&hp=1"
        },

        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/242313028.jpg?k=5b83ea880c3e36267710a168eed316a109c7ca1bdf8b4524e2c85ddd7111ff59&o=&hp=1"
        },

        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/150558586.jpg?k=fe7684f3852eff069f85893f2a0bc02f494ec066fbe2d686351bb4aa26f645d5&o=&hp=1"
        },


    ]
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                         <FontAwesomeIcon icon={faLocationDot}/>
                         <span>Elton St 125 New York</span>
                    </div>

                    <span className="hotelDistance">
                        Excellent location - 500 from center
                    </span>

                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at  this property and get a free  aiport taxi
                    </span>

                    <div className="hotelImges">
                        {photos.map((item: any) =>(
                            <div className="hotelImgesWrapper">
                                <img src={item.src} alt="" className="hotelImg"/>    
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hotel