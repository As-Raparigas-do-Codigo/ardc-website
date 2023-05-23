import React from 'react';
import { ReactComponent as Logo } from '../../assets/ardc-logo.svg';

import './organization-feature.scss';

function OrganizationFeature({ imgsrc, title = '', description = '' }) {
  return (
    <div className="organization-feature__wrapper">
      {imgsrc ? <img className={'organization-feature__image'} src={imgsrc} /> : <Logo />}
      <h5 className="">{title} </h5>
      <p> {description}</p>
    </div>
  );
}

export default OrganizationFeature;
