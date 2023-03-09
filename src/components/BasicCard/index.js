import React, { useState } from 'react';

import LinkArrow from 'components/LinkArrow';
import './basic-card.scss';

function BasicCard(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="basic-card" id={props.id} onMouseLeave={() => setShowFullDescription(false)}>
      <img src={props.imgPath} className="basic-card__img" alt={props.alt} />
      <div className="basic-card__body">
        {props.date && <span>{props.date}</span>}
        <div className="basic-card__title">
          <h5>{props.title}</h5>
        </div>
        <div onMouseEnter={() => setShowFullDescription(true)} className="basic-card__description">
          <p>{props.description}</p>
        </div>
        <div className={showFullDescription ? 'basic-card__action white' : 'basic-card__action'}>
          {props.url && <LinkArrow href={props.url}>{props.link}</LinkArrow>}
        </div>
      </div>

      {showFullDescription && (
        <div className="basic-card__fullDescription">{props.description}</div>
      )}
    </div>
  );
}

export default BasicCard;
