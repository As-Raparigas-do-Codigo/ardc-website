import React from 'react';

import LinkArrow from 'components/LinkArrow';
import './basic-card.scss';

function BasicCard(props) {
  return (
    <div className="basic-card" id={props.id}>
      <img src={props.imgPath} className="basic-card__img" alt={props.alt} />
      <div className="basic-card__body">
        {props.date && <span>{props.date}</span>}
        <h5>{props.title}</h5>
        <p className="basic-card__description">{props.description}</p>
        {props.url && 
          <LinkArrow href={props.url}>{props.link}</LinkArrow>
        }
      </div>
    </div>
  );
}

export default BasicCard;
