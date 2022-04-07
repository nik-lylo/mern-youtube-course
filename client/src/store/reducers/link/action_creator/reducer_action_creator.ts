import { ILink } from "../../../../lib/models/ILink";
import {
  LinkActionEnum,
  SetLink,
  SetLinkLoading,
  SetLinksList,
} from "../types";

export const LinkReducerActionCreators = {
  setLink: (obj: ILink | null): SetLink => ({
    type: LinkActionEnum.SET_LINK,
    payload: obj,
  }),
  setLinksList: (list: ILink[]): SetLinksList => ({
    type: LinkActionEnum.SET_LINKS_LIST,
    payload: list,
  }),
  setLinkLoading: (flag: boolean): SetLinkLoading => ({
    type: LinkActionEnum.SET_LINK_LOADING,
    payload: flag,
  }),
};
