import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function PopUpDialogBox({open,handleClose,message,handleOk,okBtnText,cancleBtnText}) {
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title">
        {message}
      </DialogTitle>
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
