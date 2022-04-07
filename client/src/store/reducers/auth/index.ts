import { AuthAction, AuthActionEnum, IAuthState } from "./types";

const initialState: IAuthState = {
  token: null,
  userId: null,
  isAuth: false,
  authLoading: false,
  authError: null,
  snackbarProps: { text: "", open: false, status: "success" },
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionEnum.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionEnum.SET_USER_ID:
      return { ...state, userId: action.payload };
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_AUTH_LOADING:
      return { ...state, authLoading: action.payload };
    case AuthActionEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.payload };
    case AuthActionEnum.SET_SNACKBAR_PROPS:
      return { ...state, snackbarProps: { ...action.payload } };
    default:
      return state;
  }
}
