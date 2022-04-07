import { ISnackbar } from "../../../../lib/models/Common";
import {
  AuthActionEnum,
  SetAuthError,
  SetAuthLoading,
  SetIsAuth,
  SetSnackbarProps,
  SetToken,
  SetUserId,
} from "../types";

export const AuthReducerActionCreators = {
  setToken: (token: null | string): SetToken => ({
    type: AuthActionEnum.SET_TOKEN,
    payload: token,
  }),
  setUserId: (id: null | string): SetUserId => ({
    type: AuthActionEnum.SET_USER_ID,
    payload: id,
  }),
  setIsAuth: (flag: boolean): SetIsAuth => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: flag,
  }),
  setAuthError: (err: null | string): SetAuthError => ({
    type: AuthActionEnum.SET_AUTH_ERROR,
    payload: err,
  }),
  setAuthLoading: (flag: boolean): SetAuthLoading => ({
    type: AuthActionEnum.SET_AUTH_LOADING,
    payload: flag,
  }),
  setSnackbarProps: (state: ISnackbar): SetSnackbarProps => ({
    type: AuthActionEnum.SET_SNACKBAR_PROPS,
    payload: state,
  }),
};
