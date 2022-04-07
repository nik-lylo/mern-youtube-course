import { ILink } from "../../../lib/models/ILink";

export interface ILinkState {
  linksList: ILink[];
  link: ILink | null;
  linkLoading: boolean;
}

export enum LinkActionEnum {
  SET_LINKS_LIST = "SET_LINKS_LIST",
  SET_LINK = "SET_LINK",
  SET_LINK_LOADING = "SET_LINK_LOADING",
}

export interface SetLinksList {
  type: LinkActionEnum.SET_LINKS_LIST;
  payload: ILink[];
}
export interface SetLink {
  type: LinkActionEnum.SET_LINK;
  payload: ILink | null;
}
export interface SetLinkLoading {
  type: LinkActionEnum.SET_LINK_LOADING;
  payload: boolean;
}

export type LinkAction = SetLinksList | SetLink | SetLinkLoading;
