import React, { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

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
    field: "name",
    headerName: "First name",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "surname",
    headerName: "Last name",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "view",
    headerName: "View",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 60,
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
    width: 60,
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
    width: 70,
    disableClickEventBubbling: true,
    renderCell: () => {
      return <DeleteIcon sx={{ fontSize: 30 }} />;
    },
  },
];

const rows = [
  { id: 1, name: "Example 1", surname: "example" },
  { id: 2, name: "Example 2", surname: "example" },
  { id: 3, name: "Example 2", surname: "example" },
  { id: 4, name: "Example 2", surname: "example" },
  { id: 5, name: "Example 2", surname: "example" },
  { id: 6, name: "Example 2", surname: "example" },
  { id: 7, name: "Example 2", surname: "example" },
  { id: 8, name: "Example 2", surname: "example" },
  { id: 9, name: "Example 2", surname: "example" },
  { id: 10, name: "Example 2", surname: "example" },
  { id: 11, name: "Example 2", surname: "example" },
  { id: 12, name: "Example 2", surname: "example" },
];

const UserList = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  return (
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
      rowsPerPageOptions={[5, 10, 25, 50]}
      pagination
      autoHeight
    />
  );
};

export default UserList;
