import React from "react";

// Assets
import { ReactComponent as GreenArrow } from "../../assets/icons/green-arrow.svg";

export default function Button({ btnClass, btnType = "button", href, disabled, children, onClick }) {
  return btnClass === "button-primary" ? (
    <button type={btnType} disabled={disabled} className={btnClass} onClick={onClick}>
      {children}
    </button>
  ) : (
    <a href={href} disabled={disabled} className={btnClass}>
      {btnClass === "button-tertiary" && <GreenArrow />}
      {children}
    </a>
  );
}
