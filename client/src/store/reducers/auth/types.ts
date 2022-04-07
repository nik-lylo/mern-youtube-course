import { ISnackbar } from "../../../lib/models/Common";

export interface IAuthState {
  token: string | null;
  userId: string | null;
  isAuth: boolean;
  authLoading: boolean;
  authError: null | string;
  snackbarProps: ISnackbar;
}

export enum AuthActionEnum {
  SET_TOKEN = "SET_TOKEN",
  SET_USER_ID = "SET_USER_ID",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_AUTH_LOADING = "SET_AUTH_LOADING",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
  SET_SNACKBAR_PROPS = "SET_SNACKBAR_PROPS",
}
export interface SetToken {
  type: AuthActionEnum.SET_TOKEN;
  payload: string | null;
}
export interface SetUserId {
  type: AuthActionEnum.SET_USER_ID;
  payload: string | null;
}
export interface SetIsAuth {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}
export interface SetAuthLoading {
  type: AuthActionEnum.SET_AUTH_LOADING;
  payload: boolean;
}
export interface SetAuthError {
  type: AuthActionEnum.SET_AUTH_ERROR;
  payload: null | string;
}
export interface SetSnackbarProps {
  type: AuthActionEnum.SET_SNACKBAR_PROPS;
  payload: ISnackbar;
}

export type AuthAction =
  | SetIsAuth
  | SetAuthLoading
  | SetAuthError
  | SetSnackbarProps
  | SetToken
  | SetUserId;
