import React from "react";

// TODO: retirar comentário após MVP
//import HelpProject from "components/Footer/HelpProject";
import Informations from "components/Footer/Informations";

import "./footer.scss";

const Footer = function () {
    // TODO: retirar comentário após MVP
    //<div className="bg-pink text-center">
    //<HelpProject />
    //</div>
    return (
    <div>
      <div className="gradient">
        <Informations />
      </div>
    </div>
  );
};

export default Footer;
