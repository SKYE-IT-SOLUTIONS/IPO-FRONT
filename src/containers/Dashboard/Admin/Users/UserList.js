import React, { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const rowWidth = 200;

const columns = [
  {
    field: "id",
    type: "number",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 70,
  },
  {
    field: "fname",
    headerName: "First name",
    headerAlign: "center",
    align: "center",
    width: rowWidth,
  },
  {
    field: "lname",
    headerName: "Last name",
    headerAlign: "center",
    align: "center",
    width: rowWidth,
  },
  {
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    align: "center",
    width: rowWidth,
  },
  {
    field: "address",
    headerName: "Address",
    headerAlign: "center",
    align: "center",
    width: rowWidth + 150,
  },
  {
    field: "view",
    headerName: "View",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 60 + 20,
    disableClickEventBubbling: true,
    renderCell: () => {
      return <ViewIcon sx={{ fontSize: 30 }} />;
    },
  },
  {
    field: "edit",
    headerName: "Edit",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 60 + 20,
    disableClickEventBubbling: true,
    renderCell: () => {
      return <ModeEditOutlineIcon sx={{ fontSize: 30 }} />;
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 70 + 20,
    disableClickEventBubbling: true,
    renderCell: () => {
      return <DeleteIcon sx={{ fontSize: 30 }} />;
    },
  },
];

const rows = [
  {
    id: 1,
    fname: "Sandaruwan",
    lname: "Lakshitha",
    email: "sandaruwan@gmail.com",
    address: "Demodarawaththa, Mahagama",
  },
  {
    id: 2,
    fname: "Supun",
    lname: "Tharuka",
    email: "supun@gmail.com",
    address: "Engiriya, Mahagama",
  },
  {
    id: 3,
    fname: "Buddhika",
    lname: "Halangoda",
    email: "halangoda@gmail.com",
    address: "Matale, Mahagama",
  },
  {
    id: 4,
    fname: "Nadun",
    lname: "Nethsara",
    email: "nethsara@gmail.com",
    address: "Kadawatha, Mahagama",
  },
  {
    id: 5,
    fname: "Sandaruwan",
    lname: "Lakshitha",
    email: "sandaruwan@gmail.com",
    address: "Demodarawaththa, Mahagama",
  },
  {
    id: 6,
    fname: "Supun",
    lname: "Tharuka",
    email: "supun@gmail.com",
    address: "Engiriya, Mahagama",
  },
  {
    id: 7,
    fname: "Buddhika",
    lname: "Halangoda",
    email: "halangoda@gmail.com",
    address: "Matale, Mahagama",
  },
  {
    id: 8,
    fname: "Nadun",
    lname: "Nethsara",
    email: "nethsara@gmail.com",
    address: "Kadawatha, Mahagama",
  },
  {
    id: 9,
    fname: "Sandaruwan",
    lname: "Lakshitha",
    email: "sandaruwan@gmail.com",
    address: "Demodarawaththa, Mahagama",
  },
  {
    id: 10,
    fname: "Supun",
    lname: "Tharuka",
    email: "supun@gmail.com",
    address: "Engiriya, Mahagama",
  },
  {
    id: 11,
    fname: "Buddhika",
    lname: "Halangoda",
    email: "halangoda@gmail.com",
    address: "Matale, Mahagama",
  },
  {
    id: 12,
    fname: "Nadun",
    lname: "Nethsara",
    email: "nethsara@gmail.com",
    address: "Kadawatha, Mahagama",
  },
  {
    id: 13,
    fname: "Sandaruwan",
    lname: "Lakshitha",
    email: "sandaruwan@gmail.com",
    address: "Demodarawaththa, Mahagama",
  },
  {
    id: 14,
    fname: "Supun",
    lname: "Tharuka",
    email: "supun@gmail.com",
    address: "Engiriya, Mahagama",
  },
  {
    id: 15,
    fname: "Buddhika",
    lname: "Halangoda",
    email: "halangoda@gmail.com",
    address: "Matale, Mahagama",
  },
  {
    id: 16,
    fname: "Nadun",
    lname: "Nethsara",
    email: "nethsara@gmail.com",
    address: "Kadawatha, Mahagama",
  },
];

const UserList = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  return (
    <>
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        components={{
          Toolbar: GridToolbar,
        }}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[8,10,12]}
        pagination
      />
    </div>
    </>
  );
};

export default UserList;
