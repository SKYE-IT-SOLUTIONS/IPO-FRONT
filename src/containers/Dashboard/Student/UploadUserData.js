/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import DataGrid from "../../../components/common/DataGrid";
import React, { useState } from "react";
import { useCSVReader, formatFileSize } from "react-papaparse";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

export default function CSV() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [rows, setRows] = useState([]);

  const fields = [
    { type: "normal", width: 150, value: "name" },
    { type: "normal", value: "index" },
    { type: "normal", value: "email" },
    {
      type: "icon",
      value: "remove",
      icon: {
        Icon: PersonRemoveIcon,
        sx: { width: "30px", height: "30px", color: "red", cursor: "pointer" },
        onclick: ({ id }) => {
          setRows(rows.filter((r) => r.id !== id));
        },
      },
    },
  ];

  const headerNames = ["Name", "Index", "Email", "Remove"];

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        setZoneHover(false);
        setRows(
          results?.data.slice(1).map((t, i) => ({
            id: i,
            name: t[
              results.data[0].indexOf(
                results.data[0].filter((t) => t.includes("Name"))[0]
              )
            ],
            index:
              t[
                results.data[0].indexOf(
                  results.data[0].filter((t) => t.includes("Permanent"))[0]
                )
              ],
            email:
              t[
                results.data[0].indexOf(
                  results.data[0].filter((t) => t.includes("Email"))[0]
                )
              ],
          }))
        );
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }) => {
        const { onClick, ...rest } = getRemoveFileProps();
        return (
          <>
            <Container component="main" maxWidth="md">
              <Grid container sx={{ mt: 1 }} spacing={3}>
                <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
                  <Divider textAlign="left">
                    <Typography variant="h5" color="text.secondary">
                      Export User Data To Database
                    </Typography>
                  </Divider>
                </Grid>
                <Grid
                  container
                  sx={{
                    mt: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  sm={8}
                  xs={12}
                >
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    Upload CSV:
                  </Typography>
                  {!acceptedFile ? (
                    <Button {...getRootProps()}>
                      Drop CSV file here or click to upload
                    </Button>
                  ) : null}
                  {acceptedFile ? (
                    <>
                      <Grid item textAlign="right">
                        <Typography variant="h6">
                          {acceptedFile?.name}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ ml: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          ({formatFileSize(acceptedFile?.size)})
                        </Typography>
                      </Grid>
                      <Grid item sx={{ ml: 1 }}>
                        <Box
                          {...rest}
                          onClick={(e) => {
                            setRows([]);
                            onClick(e);
                          }}
                        >
                          <Remove color="red" />
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                </Grid>
                {acceptedFile ? (
                  <Grid item xs={12} sm={4} textAlign="center">
                    <Button variant="contained">Upload Data to Server</Button>
                  </Grid>
                ) : null}
              </Grid>
              <Grid item xs={12} textAlign="center" sx={{ my: 2 }}>
                <ProgressBar />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <DataGrid
                  fields={fields}
                  headerNames={headerNames}
                  rows={rows}
                />
              </Grid>
            </Container>
          </>
        );
      }}
    </CSVReader>
  );
}
