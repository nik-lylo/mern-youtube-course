import React, { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleButton from "../components/UI/button/simple_button/SimpleButton";
import CustomInput from "../components/UI/input/custom_input/CustomInput";
import SnackbarCustom from "../components/UI/snack_bar/SnackBar";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";

import "../styles/pages/createPage.scss";

const CreatePage: FC = () => {
  const [linkInput, setLinkInput] = useState("");
  const { setCreateLink, setSnackbarProps } = useActions();
  const { linkLoading } = useTypedSelector((s) => s.linkReducer);
  const { token, snackbarProps } = useTypedSelector((s) => s.authReducer);
  const navigate = useNavigate();
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLinkInput(e.target.value);
  }

  function handleCloseSnackBar() {
    setSnackbarProps({ ...snackbarProps, open: false });
  }

  function handleClick() {
    if (linkInput === "") {
      setSnackbarProps({
        open: true,
        text: "Input can`t be empty!!!",
        status: "warning",
      });
      return;
    }
    setCreateLink(linkInput, token!, navigate);
  }

  return (
    <div className="dark__wrapper">
      <div className="create">
        <div className="create__content">
          <div className="create__title"> Create short link</div>
          <div className="create__input">
            <CustomInput
              type="text"
              placeholder="Enter link"
              label="Link"
              value={linkInput}
              name="link"
              handleChange={handleChange}
            />
          </div>
          <div className="create__btn">
            <SimpleButton
              text="Generate"
              background="#FD3162"
              color="white"
              type="button"
              handleClick={handleClick}
              disabled={linkLoading}
            />
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
    </div>
  );
};

export default CreatePage;
