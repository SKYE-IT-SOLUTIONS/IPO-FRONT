/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import AuthServices from "../../../../services/AuthServices";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../components/Spinner";

const rowWidth = 200;

const CompanyList = () => {

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  const [isLoading, setIsLoading] = useState(false);

  const authService = new AuthServices();
  const navigate = useNavigate();

  const [companyList, setCompanyList] = useState([]);
  const [error, setError] = useState("");

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
      field: "companyname",
      headerName: "Company name",
      headerAlign: "center",
      align: "left",
      width: rowWidth*1,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      align: "left",
      width: rowWidth*1.5,
    },
    {
      field: "address",
      headerName: "Address",
      headerAlign: "center",
      align: "left",
      width: rowWidth * 2,
    },
    {
      field: "active",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      width: rowWidth * .5,
    },
    {
      field: "view",
      headerName: "View",
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 60 + 20,
      disableClickEventBubbling: true,
      renderCell: ({ id, ...params }) => {
        return <ViewIcon style={{cursor: "pointer"}} sx={{ fontSize: 30 }} />;
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
      renderCell: ({ id, ...params }) => {
        return <DeleteIcon style={{cursor: "pointer"}} sx={{ fontSize: 30 }} onClick={async () => {
          const { status, error } = await authService.handleDeleteCompanyUser(id);
          if (status) {
            setCompanyList(companyList.filter((company) => company.id !== id));
            navigate(".");
          } else {
            console.log(error);
          }
        }}/>;
      },
    },
  ];


  const rows = companyList.map((company) => {
    return {
      id: company?.id,
      companyname: company?.companyname,
      active: company?.active ? "Activated" : "Pending",
      email: company?.email,
      address: company?.address,
    };
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await authService.handleGetAllCompanyUsers();
      console.log("data : ", data);
      if (status) {
        setCompanyList(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  return (
    isLoading ? <Spinner/>:<div style={{ width: "100%" }}>
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
  );
};

export default CompanyList;
