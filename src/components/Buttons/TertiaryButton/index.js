import React from "react";

// Assets
import { ReactComponent as GreenArrow } from "../../../assets/icons/green-arrow.svg";

export default function TertiaryButton({ href, disabled, children }) {
	return (
		<a href={href} disabled={disabled} className="button-tertiary">
			<GreenArrow />
			{children}
		</a>
	);
}
