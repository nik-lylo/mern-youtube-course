import { param } from "express-validator";
import { AppDispatch } from "../../..";
import { fetchRequest } from "../../../../api/app/fetchRequest";
import { RoutesEnum } from "../../../../lib/enum/RoutesEnum";
import { ILink } from "../../../../lib/models/ILink";
import { AuthReducerActionCreators } from "../../auth/action_creators/reducer_action_creators";
import { LinkReducerActionCreators } from "./reducer_action_creator";

export const AsyncLinkActionCreators = {
  setCreateLink:
    (linkUrl: string, token: string, navigate: any) =>
    async (dispatch: AppDispatch) => {
      dispatch(LinkReducerActionCreators.setLinkLoading(true));
      try {
        const fetched = await fetchRequest(
          "/api/link/generate",
          "POST",
          {
            from: linkUrl,
          },
          { Authorization: `Bearer ${token}` }
        );
        console.log(fetched);

        dispatch(LinkReducerActionCreators.setLinkLoading(false));
        navigate(`/${RoutesEnum.DETAIL}/${fetched._id}`);
      } catch (e: any) {
        dispatch(LinkReducerActionCreators.setLinkLoading(false));
        dispatch(
          AuthReducerActionCreators.setSnackbarProps({
            text: e.message,
            open: true,
            status: "warning",
          })
        );
      }
    },
  setGetLinkById:
    (linkId: string, token: string) => async (dispatch: AppDispatch) => {
      dispatch(LinkReducerActionCreators.setLinkLoading(true));
      try {
        const fetchedLink = await fetchRequest(
          `/api/link/${linkId}`,
          "GET",
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        dispatch(LinkReducerActionCreators.setLink(fetchedLink));
      } catch (e: any) {
        dispatch(
          AuthReducerActionCreators.setSnackbarProps({
            text: e.message,
            open: true,
            status: "warning",
          })
        );
      } finally {
        dispatch(LinkReducerActionCreators.setLinkLoading(false));
      }
    },
  setFetchLinks:
    (token: string, userId: string) => async (dispatch: AppDispatch) => {
      dispatch(LinkReducerActionCreators.setLinkLoading(true));
      try {
        const links = await fetchRequest("/api/link", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        dispatch(LinkReducerActionCreators.setLinksList(links));
      } catch (e: any) {
        console.log(e.message);
      } finally {
        dispatch(LinkReducerActionCreators.setLinkLoading(false));
      }
    },
};
