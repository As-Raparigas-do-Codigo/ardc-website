import React from "react";
import LinkArrow from "components/LinkArrow";
import LinkButton from "components/LinkButton";
import "./horizontal-card.scss";

function HorizontalCard(props) {
  return (
    <div className="horizontal-card" id={props.id}>
      <img
        src={props.imgPath}
        className="horizontal-card__img"
        alt={props.alt}
      />
      <div className="horizontal-card__body">
        <span className="horizontal-card__badge">{props.duration}</span>
        <h5>{props.title}</h5>
        <p className="horizontal-card__description">{props.description}</p>
        <span className="horizontal-card__details f-bold">{props.date}</span>
        <div className="horizontal-card__buttons">
          <LinkButton href={props.buttonUrl}>
            {props.buttonLabel}
          </LinkButton>
          <LinkArrow href={props.linkUrl}>
            {props.linkLabel}
          </LinkArrow>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
