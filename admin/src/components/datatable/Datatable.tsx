import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }: any) => {
    const [list, setList] = useState<any>("")
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const { data, loading, error } = useFetch(`/${path}`)

    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`/${path}/${id}`);
            setList(list.filter((item: any) => item._id !== id));
        } catch (err) { }
    };


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
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
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
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={list}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row: any) => row._id}
            />
        </div>
    );
};

export default Datatable;
