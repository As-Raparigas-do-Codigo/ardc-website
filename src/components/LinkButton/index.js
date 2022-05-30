import React from "react";

const LinkButton = ({ href, disabled = false, children }) => (
  <a className="button-primary" href={href} disabled={disabled}>
    {children}
  </a>
);

export default LinkButton;