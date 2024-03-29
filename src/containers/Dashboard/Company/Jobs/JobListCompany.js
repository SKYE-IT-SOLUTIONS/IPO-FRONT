/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DataService from "../../../../services/DataService";
import Spinner from "../../../../components/common/Spinner";
import { useNavigate } from "react-router-dom";

const rowWidth = 200;

const JobListCompany = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  const [isLoading, setIsLoading] = useState(false);

  const dataService = new DataService();
  const navigate = useNavigate();

  const [jobList, setJobList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await dataService.getJobsByUser();
      console.log("data : ", data);
      if (status) {
        console.log("In Admin job: ", data);
        setJobList(data);
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
      align: "center",
      width: 2 * rowWidth,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "center",
      align: "left",
      width: 2 * rowWidth,
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
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 30 }}
            onClick={() => {
              navigate(`/admin/job/${id}`);
            }}
          />
        );
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
      renderCell: ({ id, ...params }) => {
        return (
          <ModeEditOutlineIcon
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 30 }}
            onClick={() => {
              navigate(`/admin/editJob/${id}`);
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
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 30 }}
            onClick={async () => {
              const { status, error } = await dataService.deleteJob(id);
              if (status) {
                setJobList(jobList.filter((job) => job.id !== id));
                navigate("/admin/job/list");
              } else {
                console.log(error);
              }
            }}
          />
        );
      },
    },
  ];

  const rows = jobList.map((job) => {
    return {
      id: job?.id,
      title: job?.title,
      description: job?.description,
      updatedDate: job?.howLong + "  ago",
    };
  });

  return isLoading ? (
    <Spinner />
  ) : (
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
          rowsPerPageOptions={[8, 10, 12]}
          pagination
        />
      </div>
    </>
  );
};

export default JobListCompany;
