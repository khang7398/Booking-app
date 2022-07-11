import "./datatable.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }: any) => {
    const [list, setList] = useState<any[]>([])
    const location = useLocation();
    const path: any = location.pathname.split("/")[1];
    const { data, loading, error } = useFetch(`/${path}`)
    const [Searchcity, setSearchcity] = useState<any>("")


    const navigate = useNavigate()

    const handleDelete = async (id: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        try {
            await axios.delete(`/${path}/${id}`);
            setList(list.filter((item: any) => item._id !== id));
        } catch (err) { }
    };

    const handleView = async (id: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        try {
            const res = await axios.get(`/${path}/find/${id}`)
            navigate(`/${path}/${id}`)
        } catch (err) { }
    }



    useEffect(() => {
        setList(data)
    }, [data])

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params: any) => {
                return (
                    <div className="cellAction">

                        <div className="viewButton"
                            onClick={() => handleView(params.row._id)}
                        >
                            View
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">

            <div className="datatableTitle">

                {path}
                <div className="search">
                    <input type="text" placeholder="Search..."
                        onChange={(e) => setSearchcity(e.target.value)} />
                    <SearchOutlinedIcon />
                </div>

                <Link to={`/${path}/new`} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={
                    list.filter((item: any) => item.city && item.city.toLowerCase().includes(Searchcity) ||
                        item.title && item.title.toLowerCase().includes(Searchcity))
                }
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row._id}
            />
        </div>
    );
};

export default Datatable;
