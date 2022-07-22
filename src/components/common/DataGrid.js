import React, { useState } from "react";

import { DataGrid as BaseDataGrid } from "@mui/x-data-grid";
import { Button, Container } from "@mui/material";

class ColumnDefinition {
  constructor(type, icon, width, field, headerName, flex) {
    if (type === "normal") {
      this.field = field;
      this.headerName = headerName;
      this.headerAlign = "center";
      this.align = "left";
      this.minWidth = width ? width : 150;
      this.flex = flex;
      this.renderCell = ({ value }) => value;
    }
    if (type === "icon") {
      this.field = field;
      this.headerName = headerName;
      this.headerAlign = "center";
      this.align = "center";
      this.minWidth = 100;
      this.flex = flex;
      this.renderCell = (param) =>
        icon.onclick ? (
          <Button onClick={() => icon.onclick(param.row)}>
            <icon.Icon sx={icon.sx} />
          </Button>
        ) : (
          <icon.Icon sx={icon.sx} />
        );
    }
  }
}

function createColumnNode(type, icon, width, field, headerName, flex) {
  return new ColumnDefinition(type, icon, width, field, headerName, flex);
}

const DataGrid = ({ fields, headerNames, rows, onRowClick, ...props }) => {
  const [pageSize, setPageSize] = useState(9);
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);
  const columns = [];

  window.onresize = function () {
    setWindowSize(window.screen.availWidth);
  };

  fields.map(({ type, icon, width, value }, index) =>
    columns.push(
      createColumnNode(
        type,
        icon,
        width,
        value,
        headerNames[index],
        windowSize < 376 ? 0 : 1
      )
    )
  );

  return (
    <Container maxWidth="xl">
      <BaseDataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[9, 15, 20]}
        disableSelectionOnClick
        onRowClick={(params) => onRowClick && onRowClick(params.row)}
        {...props}
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: 0,
          },
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#000428",
            color: "white",
          },
          ...props.sx,
        }}
      />
    </Container>
  );
};

export default DataGrid;
