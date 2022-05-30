import React from "react";

// data
import articles from "../../data/articles";
import events from "../../data/events";

// Components
import BasicCardsRow from "components/BasicCardsRow";
import SponsorSection from "components/SponsorSection";
import WorkshopsSection from "components/WorkshopsSection";
import MentorsSection from "components/MentorsSection";

function Home() {
  return (
    <div className="home">
      <div className="gradient">
        <h1>Somos as Raparigas do Código --to be done</h1>
      </div>

      <div className="zig-zag">
        <SponsorSection />
        <WorkshopsSection
          heading={"Os nossos workshops"}
          subtitle={
            "Oferecemos vários cursos e workshops, totalmente gratuitos e adaptados às necessidades e interesses das alunas inscritas."
          }
        />
      </div>

      <div className="gradient">
        <h2>
          Queremos desmistificar o papel da mulher na tecnologia. --do be done
        </h2>
      </div>

      <div className="bg-blue">
        <h2>Gostavas de colaborar connosco-- to be done</h2>
      </div>
      <div className="zig-zag">
        <BasicCardsRow
          data={events}
          heading={"Talks & Eventos"}
          subtitle={
            "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
      <div className="gradient">
        <MentorsSection />
      </div>
      <div className="zig-zag">
        <BasicCardsRow
          data={articles}
          heading={"Artigos recentes"}
          subtitle={
            "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
    </div>
  );
}

export default Home;
