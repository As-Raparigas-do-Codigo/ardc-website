import React, { useMemo, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import HorizontalCard from 'components/HorizontalCard';
import { SiteContent } from 'Constants';
import dataWorkshops from '../../data/workshops';

function WorkshopsList({ next = false, old = false }) {
  const [workshops] = useState(dataWorkshops);
  let title = SiteContent.Title.WorkshopsList;
  let subtitle = SiteContent.Subtitle.WorkshopsList;
  let emptyList = SiteContent.Empty.WorkshopsList;

  const isFutureWorkshop = (date) => {
    return new Date(date).getTime() > Date.now();
  };

  const filteredWorkshop = useMemo(() => {
    if (next) return workshops.filter((item) => isFutureWorkshop(item.startingDate));

    if (old) return workshops.filter((item) => new Date(item.startingDate).getTime() < Date.now());

    return workshops;
  }, [workshops, old, next]);

  if (next) {
    title = SiteContent.Title.WorkshopsListNext;
    subtitle = SiteContent.Subtitle.WorkshopsListNext;
    emptyList = SiteContent.Empty.WorkshopsListNext;
  }

  if (old) {
    subtitle = SiteContent.Subtitle.WorkshopsListOld;
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
              buttonUrl={'mailto:geral@raparigasdocodigo.pt'}
              buttonLabel={
                isFutureWorkshop(item.startingDate) ? SiteContent.Buttons.WorkshopCard : null
              }
              linkUrl={item.linkUrl}
              // linkLabel={"Ver mais detalhes"}
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
