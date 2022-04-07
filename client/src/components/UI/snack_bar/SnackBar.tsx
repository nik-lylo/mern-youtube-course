import React, { FC } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useActions } from "../../../lib/hooks/useActions";

interface SnackbarCustomProps {
  text: string;
  status: "success" | "error" | "info" | "warning";
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
  handleClose: () => void;
}

const SnackbarCustom: FC<SnackbarCustomProps> = ({
  open,
  vertical,
  horizontal,
  text,
  status,
  handleClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical, horizontal }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCustom;
