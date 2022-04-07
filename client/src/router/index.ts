import { useRoutes } from "react-router-dom";
import { RoutesEnum } from "../lib/enum/RoutesEnum";
import AuthPage from "../pages/AuthPage";
import CreatePage from "../pages/CreatePage";
import DetailPage from "../pages/DetailPage";
import LinksPage from "../pages/LinksPage";

export interface IRoute {
  path: string;
  element: any;
  children?: IRoute[];
}

export const publicRoutes: IRoute[] = [
  { path: RoutesEnum.AUTH, element: AuthPage },
  { path: RoutesEnum.REDIRECT, element: AuthPage },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesEnum.CREATE, element: CreatePage },
  { path: RoutesEnum.LINKS, element: LinksPage },
  {
    path: RoutesEnum.DETAIL,
    element: DetailPage,
    children: [{ path: RoutesEnum.ID, element: DetailPage }],
  },
  { path: RoutesEnum.REDIRECT, element: CreatePage },
];
