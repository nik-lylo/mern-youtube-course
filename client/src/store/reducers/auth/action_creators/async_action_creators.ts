import { AppDispatch } from "../../..";
import { fetchRequest } from "../../../../api/app/fetchRequest";
import { loginStorage } from "../../../../lib/controller/auth/loginStorage";
import { logoutStorage } from "../../../../lib/controller/auth/logoutStorage";
import { IGenericOblect } from "../../../../lib/models/Common";
import { AuthReducerActionCreators } from "./reducer_action_creators";

export const AsyncAuthActionCreators = {
  setSignUp: (form: IGenericOblect) => async (dispatch: AppDispatch) => {
    dispatch(AuthReducerActionCreators.setAuthLoading(true));
    try {
      const data = await fetchRequest("api/auth/register", "POST", { ...form });
      dispatch(
        AuthReducerActionCreators.setSnackbarProps({
          text: data.message,
          open: true,
          status: "success",
        })
      );
    } catch (e: any) {
      dispatch(
        AuthReducerActionCreators.setSnackbarProps({
          text: e.message,
          open: true,
          status: "warning",
        })
      );
    } finally {
      dispatch(AuthReducerActionCreators.setAuthLoading(false));
    }
  },
  setSignIn: (form: IGenericOblect) => async (dispatch: AppDispatch) => {
    dispatch(AuthReducerActionCreators.setAuthLoading(true));
    try {
      const data = await fetchRequest("api/auth/login", "POST", { ...form });
      loginStorage(data.token, data.userId);
      dispatch(AuthReducerActionCreators.setToken(data.token));
      dispatch(AuthReducerActionCreators.setUserId(data.userId));
      dispatch(AuthReducerActionCreators.setIsAuth(true));
    } catch (e: any) {
      dispatch(
        AuthReducerActionCreators.setSnackbarProps({
          text: e.message,
          open: true,
          status: "error",
        })
      );
    } finally {
      dispatch(AuthReducerActionCreators.setAuthLoading(false));
    }
  },
  setSignOut: () => async (dispatch: AppDispatch) => {
    dispatch(AuthReducerActionCreators.setAuthLoading(true));
    try {
      logoutStorage();
      dispatch(AuthReducerActionCreators.setToken(null));
      dispatch(AuthReducerActionCreators.setUserId(null));
      dispatch(AuthReducerActionCreators.setIsAuth(false));
    } catch (e: any) {
      dispatch(
        AuthReducerActionCreators.setSnackbarProps({
          text: e.message,
          open: true,
          status: "error",
        })
      );
    } finally {
      dispatch(AuthReducerActionCreators.setAuthLoading(false));
    }
  },
};
