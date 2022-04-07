import React, { useEffect } from "react";
import Navbar from "./components/app/navbar/Navbar";
import { loginGetStorage } from "./lib/controller/auth/loginGetStorage";
import { useActions } from "./lib/hooks/useActions";
import { useTypedSelector } from "./lib/hooks/useTypedSelector";
import AppRouter from "./router/AppRouter";
import "./styles/app/app.scss";
const App = () => {
  const { isAuth } = useTypedSelector((s) => s.authReducer);
  const { setToken, setUserId, setIsAuth } = useActions();

  useEffect(() => {
    const data = loginGetStorage();
    if (data) {
      setToken(data.token);
      setUserId(data.userId);
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        {isAuth && <Navbar />}
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
