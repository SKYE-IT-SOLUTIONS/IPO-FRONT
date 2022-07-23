/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Typography, Divider, TextField } from "@mui/material";
import DataService from "../services/DataService";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import PopUpDialogBox from "./common/PopupDialogBox";
import EditDialogBox from "./common/EditDialogBox";
import { useFormik } from "formik";
import * as Yup from "yup";

const rowWidth = 200;

const MaintainCompany = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setrows] = useState([]);
  const [openDelete, setopenDelete] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [id, setid] = useState("");
  const [error, setError] = useState("");

  const dataService = new DataService();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
        name: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Company Name is required"),
    }),
    onSubmit: (values) => {
        let array = rows.map((row) => {
            if (row.id === id) {
              row.companyName = values.name;
            }
            return row;
          });
          setrows(array);
          setid("");
          values.name = "";
          handleCloseEdit();
    }
  })

  const EditComponent = () => {
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          fullWidth
          sx={{ my: 2 }}
          value={formik.values.name}
          {...formik.getFieldProps("name")}
          error={formik.errors.name && formik.touched.name}
          helperText={formik.touched.name && formik.errors.name}
        />
      </div>
    );
  };
  const [companyList, setcompanyList] = useState([
    {
      id: 1,
      name: "Agri World (Pvt) Ltd, Colombo 8",
    },
    {
      id: 2,
      name: "Agriculture Research Station, Kahagolla, Banndarawela",
    },
    {
      id: 3,
      name: "AgStar PLC",
    },
    {
      id: 4,
      name: "Aruna Plant NurseryA Baur &amp; Co. (Pvt) Ltd, Colombo 1",
    },
  ]);

  const handleClickOpenEdit = (Id) => {
    setopenEdit(true);
    setid(Id);
  };

  const handleCloseEdit = () => {
    setopenEdit(false);
  };

  const handleClickOpenDelete = (Id) => {
    setopenDelete(true);
    setid(Id);
  };

  const handleCloseDelete = () => {
    setopenDelete(false);
  };

  const handleOkDelete = () => {
    let array = rows.filter((row) => row.id !== id);
    setrows(array);
    setid("");
    handleCloseDelete();
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCompanies = async () => {
      let arry = companyList.map((company) => {
        return {
          id: company?.id,
          companyName: company?.name,
        };
      });
      setrows(arry);
      setIsLoading(false);
    };
    fetchCompanies();
  }, []);

  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      width: 100,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      headerAlign: "center",
      align: "left",
      width: 5 * rowWidth,
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
              handleClickOpenEdit(id);
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
              handleClickOpenDelete(id);
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div style={{ width: "100%" }}>
          <Divider sx={{ my: 3 }}>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              Company List
            </Typography>
          </Divider>

          <DataGrid
            columns={columns}
            rows={rows}
            components={{
              Toolbar: GridToolbar,
            }}
            page={page}
            autoHeight
            onPageChange={(newPage) => setPage(newPage)}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[8, 10, 12]}
            pagination
          />
          <PopUpDialogBox
            open={openDelete}
            handleClose={handleCloseDelete}
            message="Are You sure You wanna delete this company?"
            handleOk={handleOkDelete}
            okBtnText="Delete"
            cancleBtnText="Cancle"
          />
          <EditDialogBox
            open={openEdit}
            handleClose={handleCloseEdit}
            message="Change Company Name"
            handleOk={formik.handleSubmit}
            okBtnText="Edit"
            cancleBtnText="Cancle"
            editComponent={EditComponent}
          />
        </div>
      )}
    </>
  );
};

export default MaintainCompany;
