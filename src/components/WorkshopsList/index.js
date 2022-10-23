import React, { useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import HorizontalCard from 'components/HorizontalCard';
import { Constants } from 'data/Constants';
import { SiteContent } from 'data/SiteContent';
import dataWorkshops from '../../data/Workshops';

function WorkshopsList({ next = false, old = false }) {
  const [workshops] = useState(dataWorkshops);
  let title = SiteContent.WorkshopsList.Title;
  let subtitle = SiteContent.WorkshopsList.Subtitle;
  let emptyList = SiteContent.WorkshopsList.Empty;

  const isFutureWorkshop = (date) => {
    return new Date(date).getTime() > Date.now();
  };

  const filteredWorkshop = useMemo(() => {
    if (next) return workshops.filter((item) => isFutureWorkshop(item.startingDate));

    if (old) return workshops.filter((item) => new Date(item.startingDate).getTime() < Date.now());

    return workshops;
  }, [workshops, old, next]);

  if (next) {
    title = SiteContent.WorkshopsList.NextWorkshopsSection.Title;
    subtitle = SiteContent.WorkshopsList.NextWorkshopsSection.Subtitle;
    emptyList = SiteContent.WorkshopsList.NextWorkshopsSection.Empty;
  }

  if (old) {
    subtitle = SiteContent.WorkshopsList.PreviousWorkshopsSection.Subtitle;
  }

  return (
    <>
      <h2 className="mb-2">{title}</h2>
      <p>{subtitle}</p>
      <Row className="pb-3 mb-md-2">
        {filteredWorkshop.length === 0 && emptyList}
        {filteredWorkshop.map((item) => (
          <Col lg={12} md={12} sm={12} key={item.id}>
            <HorizontalCard
              alt={item.alt}
              date={item.date}
              description={item.description}
              imgPath={item.image}
              buttonUrl={`mailto:${Constants.Email}`}
              buttonLabel={
                isFutureWorkshop(item.startingDate) ? SiteContent.WorkshopsList.Buttons : null
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
