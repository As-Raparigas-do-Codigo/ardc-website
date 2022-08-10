import React from "react";
import Informations from "components/Footer/Informations";
import "./footer.scss";

// TODO: retirar comentário após MVP
//import HelpProject from "components/Footer/HelpProject";

const Footer = function () {
    // 
    //
    //<HelpProject />
    //</div>
    return (
    <div>
      {
        /* TODO: retirar comentário após MVP
        <div className="bg-pink text-center">
        */
      }
      <div className="gradient">
        <Informations />
      </div>
    </div>
  );
};

export default Footer;
