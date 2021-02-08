import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import topSvg from "../../assets/images/bg-section-top-desktop-1.svg";
import botSvg from "../../assets/images/bg-section-top-desktop-2.svg";
import illus from "../../assets/images/illus4.png";

function About() {
  return (
    <div className="About">
      <section id="Aboutus">
        <div className="CashBack__imageTop">
          <img src={topSvg} alt="svg background" />
        </div>
        <Container fluid className="mod">
          <div className="About__heading">
            <h3>About Haüskey</h3>
          </div>

          <Row>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="About__card">
                <div className="About__img">
                  <img
                    alt="Cash Back illustration"
                    src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/dev/1569504486780Cash%20Back-01.png"
                  />
                </div>
                <div className="About__content">
                  <h5>CASH BACK</h5>
                  <p>
                    Earn thousands in Haüskey Cash Back Rebates when you
                    purchase a pre-construction property on our platform.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="About__card">
                <div className="About__img">
                  <img
                    alt="Exclusive Access illustration"
                    src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/dev/1569504596360Exclusive%20access-01.png"
                  />
                </div>
                <div className="About__content">
                  <h5>EXCLUSIVE ACCESS</h5>
                  <p>
                    Search our marketplace for access to all pre-construction
                    units and leading projects in the GTHA.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="About__card">
                <div className="About__img">
                  <img
                    alt="Concierge Service illustration"
                    src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/dev/1569505046355Concierge%20service-01.png"
                  />
                </div>
                <div className="About__content">
                  <h5>CONCIERGE SERVICE</h5>
                  <p>
                    Instantly connect to our concierge service and a licensed
                    sales representative can assist you in locking down a deal.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="About__card">
                <div className="About__img">
                  <img alt="Consulting illustration" src={illus} />
                </div>
                <div className="About__content">
                  <h5>EXPERIENCED TEAM</h5>
                  <p>
                    Haüskey Realty Brokers have over of 30 years of real estate
                    experience and are excited to get you, our client, the best
                    return on your investment!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="CashBack__imageBot">
          <img src={botSvg} alt="svg background" />
        </div>
      </section>
    </div>
  );
}

export default About;
