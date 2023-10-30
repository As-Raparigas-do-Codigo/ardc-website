import React from 'react';
import './teaser.scss';

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="teaser teaser--right">
        <div className="teaser__wrapper container">
          <div className="teaser__content">
            {props.subtitle && <h4 className="teaser__subtitle">{props.subtitle}</h4>}
            <h2 className="teaser__title">{props.title}</h2>

            <p className="mt-4" dangerouslySetInnerHTML={{ __html: props.description }}></p>
          </div>
          <div className="teaser__image">
            <img src={props.imgPath} alt="teaser with icon and text" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="teaser teaser--left">
        <div className="teaser__wrapper container">
          <div className="teaser__image">
            <img src={props.imgPath} alt="teaser with icon and text" className="teaser__image" />
          </div>
          <div className="teaser__content">
            {props.subtitle && <h4 className="teaser__subtitle">{props.subtitle}</h4>}
            <h2 className="teaser__title">{props.title}</h2>

            <p className="mt-4" dangerouslySetInnerHTML={{ __html: props.description }}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Teaser;
