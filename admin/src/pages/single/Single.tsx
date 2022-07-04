import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface IData {
    id: Number;
    username: String;
    email: String;
    phone: String;
    country: String;
    city: String;
    img: string;
    src: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}


const Single = () => {
    const location = useLocation()
    const id = location.pathname.split("/users/")[1]
    const [data, setData] = useState<any>([]);


    useEffect(() => {

        const fetching = async () => {
            const res = await axios.get(`/users/${id}`)
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
                            <img
                                src={data.img}
                                alt="image user"
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{data.username}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{data.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">{data.phone}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        {data.city}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">{data.country}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
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

export default Single;
