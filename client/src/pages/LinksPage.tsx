import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../lib/enum/RoutesEnum";
import { useActions } from "../lib/hooks/useActions";
import { useTypedSelector } from "../lib/hooks/useTypedSelector";
import { ILink } from "../lib/models/ILink";
import "../styles/pages/linksPage.scss";

const LinksPage: FC = () => {
  const { setFetchLinks } = useActions();
  const { token, userId } = useTypedSelector((s) => s.authReducer);
  const { linksList } = useTypedSelector((s) => s.linkReducer);

  useEffect(() => {
    setFetchLinks(token!, userId!);
  }, []);
  return (
    <div className="dark__wrapper">
      <div className="links">
        <table className="links__table table-links">
          <thead>
            <tr>
              <th>N</th>
              <th>Oiginal</th>
              <th>Generated</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {linksList.map((it: any, index: number) => (
              <tr key={it._id}>
                <td>{index + 1}</td>
                <td>{it.from}</td>
                <td>{it.to}</td>
                <td>
                  <Link
                    className="table-links__navigate"
                    to={`/${RoutesEnum.DETAIL}/${it._id}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinksPage;
