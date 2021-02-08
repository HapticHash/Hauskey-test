import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Refer.css";

function Refer() {
  return (
    <div className="Refer">
      <Container fluid>
        <div className="Refer__heading">
          <h3> Haüskey Referral Program</h3>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <div className="Refer__image">
              <img
                alt="referal illustration"
                className="Refer__image__ref"
                src="https://www.hauskey.com/assets/images/ref_img.svg"
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="Refer__ref__detail">
              <h4>HOW DOES IT WORK ?</h4>
              <Card className="Refer__cards">
                <Card.Body>
                  <Card.Title className="Refer__cards__title">
                    1. Share The Link
                  </Card.Title>

                  <Card.Text className="Refer__cards__text">
                    Share the referral link with a friends and with family
                    members.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Refer__cards">
                <Card.Body>
                  <Card.Title className="Refer__cards__title">
                    2. Earn $50 Credit
                  </Card.Title>

                  <Card.Text className="Refer__cards__text">
                    Earn $50 in credit when they register with Haüskey.
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="Refer__terms">
                * The referral provided to you is not conditional upon the
                furtherance of any trade with the parties being referred.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} style={{ textAlign: "center" }}>
            <div className="Refer__ref__detail2">
              <h4>Refer and Earn</h4>
              <p>
                Every time you refer a friend to join Haüskey, you both earn a
                $50 credit to be used on our platform. The more friends you
                refer, the more you earn.*
              </p>
              <div className="Refer__button__block">
                <button className="Refer__button">
                  Login to view referral code
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Refer;
