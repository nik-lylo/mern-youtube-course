import { Alert, Snackbar } from "@mui/material";
import { stringify } from "querystring";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import SimpleButton from "../components/UI/button/simple_button/SimpleButton";
import CustomInput from "../components/UI/input/custom_input/CustomInput";
import SnackbarCustom from "../components/UI/snack_bar/SnackBar";
import { useActions } from "../lib/hooks/useActions";
import { useHTTP } from "../lib/hooks/useHTTP";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { IGenericOblect } from "../lib/models/Common";
import "../styles/pages/authPage.scss";

const AuthPage: FC = () => {
  const [form, setForm] = useState<IGenericOblect>({ email: "", password: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const { authLoading, snackbarProps } = useTypedSelector((s) => s.authReducer);
  const { setSignUp, setSignIn, setSnackbarProps } = useActions();

  function handleCloseSnackBar() {
    setSnackbarProps({ text: "", open: false, status: "success" });
  }

  function handleSignUp() {
    setSignUp(form);
  }
  function handleSignIn() {
    setSignIn(form);
  }

  return (
    <div className="auth">
      <div className="auth__flex">
        <div className="auth__image">
          <img src={require("../assets/image/auth/social-tree.png")} alt="" />
        </div>
        <div className="auth__registr registr-auth">
          <div className="registr-auth__title">Welcome</div>
          <div className="registr-auth__form">
            <div className="registr-auth__input">
              <CustomInput
                type="email"
                placeholder="Enter your email"
                value={form.email}
                name="email"
                label="Login"
                handleChange={handleChange}
              />
            </div>
            <div className="registr-auth__input">
              <CustomInput
                type="password"
                placeholder="Enter your password"
                value={form.password}
                name="password"
                label="Password"
                handleChange={handleChange}
              />
            </div>
            <div className="registr-auth__signin">
              <SimpleButton
                text="Sign In"
                type="button"
                background="#FD3162"
                color="white"
                disabled={authLoading}
                handleClick={handleSignIn}
              />
            </div>
            <div className="registr-auth__signup">
              <SimpleButton
                text="Sign Up"
                type="button"
                background=" #FF9800"
                color="white"
                handleClick={handleSignUp}
                disabled={authLoading}
              />
            </div>
          </div>
        </div>
      </div>

      <SnackbarCustom
        text={snackbarProps.text}
        open={snackbarProps.open}
        status={snackbarProps.status}
        vertical="top"
        horizontal="right"
        handleClose={handleCloseSnackBar}
      />
    </div>
  );
};

export default AuthPage;
