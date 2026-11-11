import React from 'react';
import { Container } from 'react-bootstrap';
import './inactive-banner.scss';

function InactiveBanner({ translation }) {
  return (
    <div className="inactive-banner" role="alert">
      <Container>
        <p className="inactive-banner__status">{translation('InactiveBanner-Status')}</p>
        <p>{translation('InactiveBanner-Decision')}</p>
        <p>{translation('InactiveBanner-Farewell')}</p>
        <p>{translation('InactiveBanner-Thanks')}</p>
      </Container>
    </div>
  );
}

export default InactiveBanner;
