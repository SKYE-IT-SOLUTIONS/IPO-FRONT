/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DataService from "../../../../services/DataService";
import Spinner from "../../../../components/Spinner";
import { useNavigate } from "react-router-dom";

const rowWidth = 200;

const NewsListNonApproved = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  const [isLoading, setIsLoading] = useState(false);

  const dataService = new DataService();
  const navigate = useNavigate();

  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await dataService.handleNonApprovedNews();
      if (status) {
        console.log("In Admin : ", data);
        setNewsList(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, []);

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
        align: "left",
        width: 2 * rowWidth,
      },
      {
        field: "visibility",
        headerName: "Visibility",
        headerAlign: "center",
        align: "center",
        width: 0.5 * rowWidth,
      },
      {
        field: "status",
        headerName: "Status",
        headerAlign: "center",
        align: "center",
        width: 0.5 * rowWidth,
      },
      {
        field: "createdBy",
        headerName: "Created By",
        headerAlign: "center",
        align: "center",
        width: 1.5*rowWidth,
      },
      {
        field: "updatedDate",
        headerName: "Updated",
        headerAlign: "center",
        align: "center",
        width: rowWidth - 50,
      },
    {
      field: "view",
      headerName: "View",
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: ({ id, ...params }) => {
        return (
          <ViewIcon
          style={{cursor: "pointer"}}
            sx={{ fontSize: 30 }}
            onClick={() => {
              navigate(`/admin/news/${id}`);
            }}
          />
        );
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
        return (
          <DeleteIcon
          style={{cursor: "pointer"}}
            sx={{ fontSize: 30 }}
            onClick={async () => {
              const { status, error } = await dataService.handleDeleteNews(id);
              if (status) {
                setNewsList(newsList.filter((news) => news.id !== id));
                navigate("/admin/news/non-approved-list");
              } else {
                console.log(error);
              }
            }}
          />
        );
      },
    },
    {
        field: "Approve",
        headerName: "Edit",
        headerAlign: "center",
        align: "center",
        sortable: false,
        width: 60 + 20,
        disableClickEventBubbling: true,
        renderCell: ({ id, ...params }) => {
          return (
            <CheckCircleIcon
            style={{cursor: "pointer"}}
              sx={{ fontSize: 30 }}
              onClick={async () => {
                const { status, error } = await dataService.handleApprovedNews(id);
                if (status) {
                  setNewsList(newsList.filter((news) => news.id !== id));
                  navigate("/admin/news/non-approved-list");
                } else {
                  console.log(error);
                }
              }}
            />
          );
        },
      },
  ];

  const rows = newsList.map((newsList) => {
    return {
        id: newsList?.id,
        title: newsList?.title,
        status: newsList?.approval ? "Approved" : "Pending",
        visibility: newsList?.global ? "Public" : "Private",
        createdBy: newsList?.addedBy,
        updatedDate: newsList?.howLong + "  ago",
    };
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default NewsListNonApproved;
