import React from "react";
import Icon from "components/Icon";
import "./person-card.scss";

function PersonCard({ person }) {
  return (
    <div className="person-card" id={person.id}>
      <img
        src={require("assets/team/" + person.avatar)}
        className="person-card__img"
        alt={"a person"}
      />
      <div className="person-card__body">
        <h5>{person.name}</h5>
        <div className="person-card__job">{person.job}</div>
        <div className="person-card__company">{person.company}</div>
      </div>

      <div className="person-card__icons">
        {person.social.map((socialNetworkLink) => {
          const socialNetwork = Object.keys(socialNetworkLink)[0];
          const key = `${person.id}-${socialNetwork}`;
          return (
            <Icon
              key={key}
              name={socialNetwork}
              link={socialNetworkLink[socialNetwork]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PersonCard;
