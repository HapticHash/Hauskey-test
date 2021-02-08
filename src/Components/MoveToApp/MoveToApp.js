import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MoveToApp.css";
import topSvg from "../../assets/images/bg-section-top-desktop-1.svg";
import botSvg from "../../assets/images/bg-section-top-desktop-2.svg";

function MoveToApp() {
  return (
    <div className="MoveToApp">
      <section id="MoveToApp">
        <div className="CashBack__imageTop">
          <img src={topSvg} alt="svg background" />
        </div>
        <Container fluid className="mod">
          <div className="MoveToApp__wrapper">
            <Row>
              <Col>
                <div className="MoveToApp__heading">
                  <h3> Mobile App Features</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xm={12} md={4}>
                <Card className="App__features__card" style={{ width: "auto" }}>
                  <Card.Img
                    className="MoveApp__img"
                    variant="top"
                    src="https://i.pinimg.com/originals/1c/27/60/1c27609899152aa204cbb83eb1aa02f7.gif"
                  />
                  <Card.Body>
                    <Card.Title className="App__features__title">
                      Search
                    </Card.Title>
                    <Card.Text className="App__features__text">
                      Get exclusive access to leading projects and high-profile
                      properties. Add properties to your Wish List by tapping
                      the heart icon or create filters to save your searches for
                      later.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xm={12} md={4}>
                <Card className="App__features__card" style={{ width: "auto" }}>
                  <Card.Img
                    className="MoveApp__img"
                    variant="top"
                    src="https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif"
                  />
                  <Card.Body>
                    <Card.Title className="App__features__title">
                      Secure
                    </Card.Title>
                    <Card.Text className="App__features__text">
                      Make an offer on a property with the click of a button.
                      Once your offer is made, we will schedule an appointment
                      with one of our Representatives to help secure your deal.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xm={12} md={4}>
                <Card className="App__features__card" style={{ width: "auto" }}>
                  <Card.Img
                    className="MoveApp__img"
                    variant="top"
                    src="https://i.pinimg.com/originals/36/3b/43/363b43ad2687207827c5dcffdb06feed.gif"
                  />
                  <Card.Body>
                    <Card.Title className="App__features__title">
                      Earn Cashback
                    </Card.Title>
                    <Card.Text className="App__features__text">
                      Earn significant cashback on your purchased property on
                      closing. Developers pay us a commission on your purchase,
                      and we put those earnings back into your pocket.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="MoveApp">
              <Row>
                <Col xm={12} md={6}>
                  <div className="MoveToApp__mobile">
                    <img
                      alt="mobile__app__ios"
                      src="https://www.hauskey.com/assets/images/mob_1.png"
                    />
                  </div>
                </Col>

                <Col xm={12} md={6}>
                  <div className="MoveToApp__desc">
                    <h3>Move to our App!</h3>
                    <h4>
                      Download the Haüskey App today for iPhone, Android, and
                      iPad for FREE and unlock the door to your next home or
                      investment
                    </h4>
                    <div className="MoveToApp__App__Link">
                      <ul className="MoveToApp__App__Links">
                        <li id="MoveToApp__ios__link">
                          <a
                            href="https://apps.apple.com/ca/app/hauskey/id1477303720"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt="MoveToApp__appstore__link"
                              src="https://www.hauskey.com/assets/images/ic_ios.png"
                            />
                          </a>
                        </li>
                        <li id="MoveToApp__android__link">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.hauskey"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt="MoveToApp__playstore__link"
                              src="https://www.hauskey.com/assets/images/google-play-badge.png"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <div className="CashBack__imageBot" style={{ marginTop: "-3em" }}>
          <img src={botSvg} alt="svg background" />
        </div>
      </section>
    </div>
  );
}

export default MoveToApp;
