import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function PageLayout({ title, description, customBanner = null, children }) {
  return (
    <div>
      <div className="gradient">
        <Container className="pt-md-5 pb-5 padding-top-first-section">
          {(title || customBanner) && (
            <Row className="py-md-5 py-sm-5">
              {customBanner ? (
                customBanner
              ) : (
                <Col
                  md={{ span: 6, offset: 3 }}
                  className="my-4 align-self-center text-center">
                  <h1 className="py-1">{title}</h1>
                  <p className="py-1">{description}</p>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </div>

      {(title || customBanner) && <div className="zig-zag"></div>}
      <div> {children}</div>
    </div>
  );
}

export default PageLayout;
