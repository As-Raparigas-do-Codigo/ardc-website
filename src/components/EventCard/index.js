import React, { useState, Fragment } from 'react';

import LinkArrow from 'components/LinkArrow';
import './event-card.scss';

function EventCard({ item }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <div className="event-card" id={item.id}>
        <img src={item.image} className="event-card__img" alt={item.alt} />
        <div className="event-card__body">
          {item.date && <span>{item.date}</span>}
          <div className="event-card__title">
            <h5>{item.title}</h5>
          </div>
          <div
            onMouseEnter={() => setShowFullDescription(true)}
            className="event-card__description">
            <p>{item.description}</p>
          </div>

          <div className={showFullDescription ? 'event-card__action white' : 'event-card__action'}>
            {item.link && <LinkArrow href={item.link.url}>Vê mais aqui</LinkArrow>}
          </div>
        </div>
      </div>
      {showFullDescription && (
        <div
          onMouseLeave={() => setShowFullDescription(false)}
          className="event-card__fullDescription">
          {item.description}
        </div>
      )}
    </>
  );
}

export default EventCard;
