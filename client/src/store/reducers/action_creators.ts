import { AsyncAuthActionCreators } from "./auth/action_creators/async_action_creators";
import { AuthReducerActionCreators } from "./auth/action_creators/reducer_action_creators";
import { AsyncLinkActionCreators } from "./link/action_creator/async_action_creator";
import { LinkReducerActionCreators } from "./link/action_creator/reducer_action_creator";

export const allActionCreators = {
  ...AuthReducerActionCreators,
  ...AsyncAuthActionCreators,
  ...LinkReducerActionCreators,
  ...AsyncLinkActionCreators,
};
