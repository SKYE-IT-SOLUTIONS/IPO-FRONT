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
    field: "title",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    width: 2*rowWidth,
  },
  {
    field: "description",
    headerName: "Description",
    headerAlign: "center",
    align: "left",
    width: 2*rowWidth,
  },
  {
    field: "updatedDate",
    headerName: "Updated",
    headerAlign: "center",
    align: "center",
    width: rowWidth-50,
  },
  {
    field: "view",
    headerName: "View",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 80,
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
    title : "Job list upgrade plumbers with NVQ-3 qualification at no cost to them",
    description : "The Public Utilities Commission of Sri Lanka (PUCSL), the regulator of the electricity industry and the designated regulator for water services industry, entered into a Memorandum of Understanding with Tertiary and Vocational Education Commission (TVEC), Vocational Training Authority (VTA) and National Apprentice and Industrial Training Authority (NAITA) recently to provide free National Vocational Qualification level three and four for plumbers in Sri Lanka.",
    updatedDate : "2020-12-12"
  },
  {
    id: 2,
    title : "NEWSPUCSL upgrade plumbers with NVQ-3 qualification at no cost to them",
    description : "The Public Utilities Commission of Sri Lanka (PUCSL), the regulator of the electricity industry and the designated regulator for water services industry, entered into a Memorandum of Understanding with Tertiary and Vocational Education Commission (TVEC), Vocational Training Authority (VTA) and National Apprentice and Industrial Training Authority (NAITA) recently to provide free National Vocational Qualification level three and four for plumbers in Sri Lanka.",
    updatedDate : "2020-12-12"
  },
];

const JobList = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  return (
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
        rowsPerPageOptions={[8, 10, 12]}
        pagination
      />
    </div>
  );
};

export default JobList;
