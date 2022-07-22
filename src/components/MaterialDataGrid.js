import React, { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import clsx from "clsx";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export default function BasicFilteringGrid() {
  const [page, setPage] = useState(0);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "First name",
      width: 130,
      cellClassName: (params) =>
        clsx("super-app", {
          negative: params.value === "Example 1",
          positive: params.value === "Example 2",
        }),
    },
    {
      field: "surname",
      headerName: "Last name",
      width: 250,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        return (
          <Button variant="contained" color="primary" startIcon={<EditIcon />}>
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        return (
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const rows = [
    { id: 1, name: "Example 1", surname: "Example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 3, name: "Example 1", surname: "Example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
    { id: 1, name: "Example 1", surname: "example" },
    { id: 2, name: "Example 2", surname: "example" },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <Box
        sx={{
          height: 500,
          width: 1,
          "& .super-app-theme--cell": {
            backgroundColor: "rgba(224, 183, 60, 0.55)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.negative": {
            backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.positive": {
            backgroundColor: "#d47483",
            color: "#1a3e72",
            fontWeight: "600",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}
