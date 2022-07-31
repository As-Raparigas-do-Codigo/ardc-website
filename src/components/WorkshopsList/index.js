import React, { useMemo, useState } from "react";

import HorizontalCard from "components/HorizontalCard";
import { Row, Col } from "react-bootstrap";
import dataWorkshops from "../../data/workshops";

function WorkshopsList({next = false, all = false, old = false}) {
  const [workshops] = useState(dataWorkshops)
  let title = "Todos os nossos workshops"
  let subtitle = "Podes ver todos os workshops que já realizámos e aqueles que ainda estarão por acontecer!"
  let emptyList = "Se queres workshops contacta-nos!"

  const isFutureWorkshop = (date) => {
    return new Date(date).getTime() > Date.now()
  }

  const filteredWorkshop = useMemo(() => {
    if(next)
      return workshops.filter(item => isFutureWorkshop(item.startingDate))

    if(old)
      return workshops.filter(item => new Date(item.startingDate).getTime() <  Date.now())

    return workshops
  }, [workshops, old, next])

  if(next){
    title =  "Próximos workshops"
    subtitle = "Reserva já o teu lugar!"
    emptyList = "Aguarda pelos próximos workshops!"
  }

  if(old){
    title =  "Os nossos workshops"
    subtitle = "Visita os workshops que já realizámos"
  }

  return (
    <>
      <h2 className="mb-2">{title}</h2>
      <p>{subtitle}</p>
      <Row className="pb-3 mb-md-2">
        { filteredWorkshop.length === 0 && emptyList}
        { filteredWorkshop.map((item) => (
          <Col lg={12} md={12} sm={12} key={item.id}>
            <HorizontalCard
              alt={item.alt}
              date={item.date}
              description={item.description}
              imgPath={item.image}
              buttonUrl={"mailto:asraparigasdocodigo@gmail.com"}
              buttonLabel={isFutureWorkshop(item.startingDate) ? "Quero inscrever-me !" : null}
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
