import { Backdrop, CircularProgress } from "@mui/material";
import React, { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import "../styles/pages/detailPage.scss";

const DetailPage: FC = () => {
  const { setLinkLoading, setGetLinkById } = useActions();
  const { token } = useTypedSelector((s) => s.authReducer);
  const { linkLoading, link } = useTypedSelector((s) => s.linkReducer);
  const params = useParams();

  useEffect(() => {
    setGetLinkById(params.id!, token!);
  }, [params.id]);

  if (linkLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={linkLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div className="dark__wrapper">
      <div className="detail">
        <div className="detail__card card-detail">
          <div className="card-detail__title ">Link</div>
          <div className="card-detail__generete card-detail__text">
            Genereted link:
            <a
              className="card-detail__link"
              target="_blank"
              href={link?.to || ""}
              rel="noopener noreferrer"
            >
              {link?.to}
            </a>
          </div>
          <div className="card-detail__from card-detail__text">
            From:
            <a
              className="card-detail__link"
              target="_blank"
              href={link?.from || ""}
              rel="noopener noreferrer"
            >
              {link?.from}
            </a>
          </div>
          <div className="card-detail__click card-detail__text">
            Number of clicks:<span>{link?.clicks}</span>
          </div>
          <div className="card-detail__created card-detail__text">
            Created:<span>{new Date(link?.date!).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
