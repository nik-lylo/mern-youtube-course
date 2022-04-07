export interface IGenericOblect {
  [key: string]: any;
}

export interface ISnackbar {
  open: boolean;
  text: string;
  status: "success" | "error" | "info" | "warning";
}
