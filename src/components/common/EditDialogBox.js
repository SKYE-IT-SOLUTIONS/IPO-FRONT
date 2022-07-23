import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function EditpDialogBox({open,handleClose,message,handleOk,okBtnText,cancleBtnText,editComponent:EditComponent}) {
  
  return (
     <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="responsive-dialog-title">
        {message}
      </DialogTitle>
      <DialogContent>
        <EditComponent />
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleOk}
        >
          {okBtnText}
        </Button>
        <Button onClick={handleClose} autoFocus>
          {cancleBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
