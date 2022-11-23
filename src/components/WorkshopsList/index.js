import React, { useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import HorizontalCard from 'components/HorizontalCard';
import Constants from 'data/Constants';
import dataWorkshops from 'data/workshops';

function WorkshopsList({ next = false, old = false, all = false, translation }) {
  const [workshops] = useState(dataWorkshops);
  let title = translation("WorkshopsList-Title");
  let subtitle = translation("WorkshopsList-Subtitle");
  let emptyList = translation("WorkshopsList-Empty");

  const isFutureWorkshop = (date) => {
    return new Date(date).getTime() > Date.now();
  };

  const filteredWorkshop = useMemo(() => {
    if (next) return workshops.filter((item) => isFutureWorkshop(item.startingDate));

    if (old) return workshops.filter((item) => new Date(item.startingDate).getTime() < Date.now());

    return workshops;
  }, [workshops, old, next]);

  if (next) {
    title = translation("WorkshopsList-NextWorkshopsSection-Title");
    subtitle = translation("WorkshopsList-NextWorkshopsSection-Subtitle");
    emptyList = translation("WorkshopsList-NextWorkshopsSection-Empty");
  }

  if (old) {
    subtitle = translation("WorkshopsList-PreviousWorkshopsSection-Subtitle");
  }
  
  if (all) {
    title = translation("WorkshopsList-AllWorkshopsSection-Title");
    subtitle = translation("WorkshopsList-AllWorkshopsSection-Subtitle");
    emptyList = translation("WorkshopsList-AllWorkshopsSection-Empty");
  }

  return (
    <>
      <h2 className="mb-2">{title}</h2>
      <p>{subtitle}</p>
      <Row className="pb-3 mb-md-2">
        {
          filteredWorkshop.length === 0 &&
          <p><strong>{emptyList}</strong></p>
        }
        {filteredWorkshop.map((item) => (
          <Col lg={12} md={12} sm={12} key={item.id}>
            <HorizontalCard
              alt={item.alt}
              date={item.date}
              description={item.description}
              imgPath={item.image}
              buttonUrl={`mailto:${Constants.Email}`}
              buttonLabel={
                isFutureWorkshop(item.startingDate) ? translation("WorkshopsList-Buttons") : null
              }
              linkUrl={item.linkUrl}
              duration={item.descriptiveDuration}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default WorkshopsList;
