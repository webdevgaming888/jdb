import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

const FooterBank = ({ bank, t }) => {
  function backtoTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="footer-col">
      <div className="footer-bank">
        <div className="footer-title">{t("bank")}</div>
        <div className="footer-content footer-bank">
          {bank.map((item) => {
            return (
              <Link
                key={item.id}
                onClick={backtoTop}
                to={`${process.env.PUBLIC_URL}/bank`}
              >
                <img src={item.src} alt={"bank"} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(FooterBank);
