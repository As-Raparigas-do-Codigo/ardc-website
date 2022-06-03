import React from "react";

const LinkButton = ({ href, disabled = false, target = "", children }) => (
  <a
    className="button-primary"
    href={href}
    disabled={disabled}
    target={target}
    rel="noreferrer">
    {children}
  </a>
);

export default LinkButton;
