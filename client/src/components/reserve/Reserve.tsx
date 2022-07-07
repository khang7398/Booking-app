import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../reserve/reserve.css"
import useFetch from "../hook/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/searchContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Reserve = ({ setOpen, hotelId }: any) => {
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const [selectRooms, setSelectRooms] = useState<any>([])
    const { dates } = useContext<any>(SearchContext)



    const navigate = useNavigate()

    const getDatesInRange = (startDate: any, endDate: any) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate)
    const isAvailable = (roomNumber: any) => {

        const isFound = roomNumber.unavailableDates.some((date: any) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound
    }

    const handleSelect = (e: any) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectRooms(checked ? [...selectRooms, value] : selectRooms.filter((item: any) => item !== value))
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectRooms.map((roomId: any) => {
                const res: any = axios.put(`/rooms/availability/${roomId}`, { dates: alldates })
                return res.data
            }))
            setOpen(false)
            navigate("/")
        } catch (err) { }
    }

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
                <span>Select your rooms:</span>
                {data.map((item: any) => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumbers.map((roomNumber: any, index: any) => (
                                <div className="room" key={index}>
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve