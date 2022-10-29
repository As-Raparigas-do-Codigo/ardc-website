import React from 'react';
import Icon from 'components/Icon';
import './person-card.scss';

function PersonCard({ person = null }) {
  /*
  const Colaborar = () => {
    return (
      <div className="person-card">
        <div className="person-card__img">
          <img src={require('assets/team/pessoa1.png')} alt={'a person'} />
        </div>
        <div className="person-card__body">
          <h5>Gostavas de colaborar connosco?</h5>
          <div className="person-card__icons">
            <LinkButton href={Routes.Collaborate}>Quero Colaborar!</LinkButton>
          </div>
        </div>
      </div>
    );
  };
    */

  const Person = () => {
    return (
      <div className="person-card">
        <div className="person-card__img">
          <img src={require('assets/team/' + person.avatar)} alt={'a person'} />
        </div>
        <div className="person-card__body">
          <h5 className="person-card__name">{person.name}</h5>
          <div className="person-card__job">{person.job}</div>
          <div className="person-card__company">{person.company}</div>
          <div className="person-card__icons">
            {person.social.map((socialNetworkLink, index) => {
              let socialNetwork = Object.keys(socialNetworkLink)[0];
              return (
                <Icon key={index} name={socialNetwork} link={socialNetworkLink[socialNetwork]} />
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  /* Quero Colaborar foi suprimido por agora */
  return person ? <Person /> : '' /*<Colaborar />;*/
}

export default PersonCard;
