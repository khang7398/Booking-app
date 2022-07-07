import "./singleHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface IData {
    id: Number;
    address: String;
    city: String;
    name: String;
    photos: any;
    desc: String;
    distance: String;
    src: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}


const SingleHotel = () => {
    const location = useLocation()
    const id = location.pathname.split(`/hotels`)[1]
    const [data, setData] = useState<IData>([] as any);


    useEffect(() => {

        const fetching = async () => {
            const res = await axios.get(`/hotels/find/${id}`)
            const dataUser = res.data
            setData(dataUser)
        }

        fetching()

    }, [])



    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <div className="details">
                                <h1 className="itemTitle">{data.name}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">address:</span>
                                    <span className="itemValue">{data.address}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">city:</span>
                                    <span className="itemValue">{data.city}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">desc:</span>
                                    <span className="itemValue">
                                        {data.desc}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Distance:</span>
                                    <span className="itemValue">{data.distance}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;
