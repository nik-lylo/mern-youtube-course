import React, { FC } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from ".";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((s) => s.authReducer);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((it) => (
            <Route key={it.path} path={it.path} element={<it.element />}>
              {it.children?.map((child) => (
                <Route
                  path={child.path}
                  element={<child.element />}
                  key={child.path}
                />
              ))}
            </Route>
          ))
        : publicRoutes.map((it) => (
            <Route key={it.path} path={it.path} element={<it.element />}>
              {it.children?.map((child) => (
                <Route
                  path={child.path}
                  element={<child.element />}
                  key={child.path}
                />
              ))}
            </Route>
          ))}
    </Routes>
  );
};

export default AppRouter;
