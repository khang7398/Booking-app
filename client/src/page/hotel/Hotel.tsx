import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../hotel/hotel.css"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/mailList"
import Navbar from "../../components/navbar/Navbar"
import { useContext, useState } from "react"
import useFetch from "../../components/hook/useFetch"
import { useLocation } from "react-router-dom"
import { SearchContext } from "../../context/searchContext"





const Hotel = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const { data, loading, error } = useFetch(`/hotels/find/${path}`);

    const { dates } = useContext<any>(SearchContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1: any, date2: any) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }


    const handleOpen = (i: any) => {
        setSlideNumber(i)
        setOpen(true)
    }


    const handleMove = (direction: any) => {
        let newSliderNumber

        if (direction == "left") {
            newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }

        setSlideNumber(newSliderNumber)
    }



    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("Loading") : (
                <>
                    <div className="hotelContainer">
                        {open && <div className="slider">
                            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}
                            />
                            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("left")} />
                            <div className="sliderWrapper">
                                <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                            </div>
                            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("right")} />
                        </div>}
                        <div className="hotelWrapper">
                            <button className="bookNow">Reserve</button>
                            <h1 className="hotelTitle">{data.name}</h1>
                            <div className="hotelAddress">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>{data.address}</span>
                            </div>

                            <span className="hotelDistance">
                                Excellent location - {data.destination} from center
                            </span>

                            <span className="hotelPriceHighlight">
                                Book a stay over {data.cheapestPrice} at  this property and get a free  aiport taxi
                            </span>

                            <div className="hotelImges">
                                {data.photos?.map((photo: any, i: any) => (
                                    <div className="hotelImgesWrapper">
                                        <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                                    </div>
                                ))}
                            </div>

                            <div className="hotelDetails">
                                <div className="hotelDetailsTexts">
                                    <h1 className="hotelTitle">{data.title}</h1>
                                    <p className="hotelDesc">
                                        {data.desc}
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
                        <MailList />
                        <Footer />
                    </div>
                </>
            )

            }
        </div>
    )
}

export default Hotel