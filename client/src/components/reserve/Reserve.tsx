import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../reserve/reserve.css"
import useFetch from "../hook/useFetch"
import { useState } from "react"

const Reserve = ({ setOpen, hotelId }: any) => {
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const [selectRooms, setSelectRooms] = useState<any>([])
    const handleSelect = (e: any) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectRooms(checked ? [...selectRooms, value] : selectRooms.filter((item: any) => item !== value))
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

                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reserve