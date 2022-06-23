import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
    const [file, setFile] = useState<any>("");
    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState<any>(undefined);
    const [rooms, setRooms] = useState<any>([]);

    const { data, loading, error } = useFetch("/hotels");

    const handleChange = async (e: any) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e: any) => {
        e.preventDefault()
        const roomNumbers = rooms.split(",").map((room: any) => ({ number: room }))
        try {
            await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">

                    <div className="right">
                        <form>
                            {roomInputs.map((input: any) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleChange} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Room </label>
                                <textarea onChange={e => setRooms(e.target.value)} placeholder="give comma between room numbers."></textarea>
                            </div>
                            <div className="formInput" >
                                <label>Choose a hotel</label>
                                <select id="hotelId"
                                    onChange={(e) => setHotelId(e.target.value)}>
                                    {loading
                                        ? "loading"
                                        : data &&
                                        data.map((hotel: any) => (
                                            <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                                        ))}
                                </select>
                            </div>
                            <button onClick={handleClick}>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRoom;
