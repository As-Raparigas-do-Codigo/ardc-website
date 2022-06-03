import React from "react";
import { Container, Col, Row, Breadcrumb } from "react-bootstrap";

function PageLayout({
  title,
  description,
  customBanner = null,
  breadcrumbsData,
  children,
}) {
  const bannerHasInfo = title || customBanner;
  const backgroundClass = bannerHasInfo ? "gradient" : "bg-blue";
  return (
    <div>
      <div className={backgroundClass}>
        <Container className="pt-md-5 pb-4 padding-top-first-section">
          {bannerHasInfo && (
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

      {bannerHasInfo && <div className="zig-zag"></div>}

      {breadcrumbsData && (
        <div className="breadcrumb mt-4">
          <Container>
            <Row>
              <Col>
                <Breadcrumb>
                  {breadcrumbsData.map((breadcrumb) => {
                    if (breadcrumb.href) {
                      return (
                        <Breadcrumb.Item href={breadcrumb.href}>
                          {breadcrumb.label}
                        </Breadcrumb.Item>
                      );
                    } else {
                      return (
                        <Breadcrumb.Item active>
                          {breadcrumb.label}
                        </Breadcrumb.Item>
                      );
                    }
                  })}
                </Breadcrumb>
              </Col>
            </Row>
            <hr />
          </Container>
        </div>
      )}

      <div> {children}</div>
    </div>
  );
}

export default PageLayout;
