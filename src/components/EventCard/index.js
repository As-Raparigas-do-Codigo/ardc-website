import React, { useState, Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';

import LinkArrow from 'components/LinkArrow';
import './event-card.scss';

function EventCard({ item }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const badgeColor = (category) => (
    <Badge className={category.color} pill>
      {category.label}
    </Badge>
  );

  return (
    <>
      <div className="event-card" id={item.id}>
        <img src={item.image} className="event-card__img" alt={item.alt} />
        <div className="event-card__body" onMouseEnter={() => setShowFullDescription(true)}>
          {item.date && <span>{item.date}</span>}
          <div className={'event-card__badge-wrapper'}>
            {item.category && <div className="event-card__badge">{badgeColor(item.category)}</div>}
            {item.link && <div className="event-card__badge">{badgeColor(item.link.type)}</div>}
          </div>

          <div className="event-card__title">
            <h5>{item.title}</h5>
          </div>
          <div className="event-card__subtitle">
            <p>{item.subtitle.toUpperCase()}</p>
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
