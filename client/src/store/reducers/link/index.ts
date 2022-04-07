import { ILinkState, LinkAction, LinkActionEnum } from "./types";

const initialState: ILinkState = {
  link: null,
  linksList: [],
  linkLoading: false,
};

export default function linkReducer(
  state = initialState,
  action: LinkAction
): ILinkState {
  switch (action.type) {
    case LinkActionEnum.SET_LINK:
      return { ...state, link: action.payload };
    case LinkActionEnum.SET_LINK_LOADING:
      return { ...state, linkLoading: action.payload };
    case LinkActionEnum.SET_LINKS_LIST:
      return { ...state, linksList: action.payload };
    default:
      return state;
  }
}
