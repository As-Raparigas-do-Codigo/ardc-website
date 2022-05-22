import React from "react";
import Button from "../Button";
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
          <Button btnClass="button-primary" href={props.buttonUrl}>
            {props.buttonLabel}
          </Button>
          <Button btnClass="button-tertiary" href={props.linkUrl}>
            {props.linkLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
