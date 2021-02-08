import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import topSvg from "../../assets/images/bg-section-top-desktop-1.svg";
import botSvg from "../../assets/images/bg-section-top-desktop-1.svg";
import "./CashBack.css";

function CashBack() {
  const [seconds, setSeconds] = useState(1281833);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 18);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="CashBack">
      <div className="CashBack__imageTop">
        <img src={topSvg} alt="svg background" />
      </div>
      <Container fluid className="mod">
        <Row>
          <Col>
            <div className="Cashback__head">
              <h3>Unclaimed Cash Backs </h3>
            </div>
          </Col>
        </Row>
        <Container fluid className="mod">
          <Row>
            <Col xs={12} md={12} lg={4}>
              <Card className="CashBack__cards">
                <Card.Body>
                  <Card.Title className="CashBack__cards__title">
                    Cash Back unclaimed every day
                  </Card.Title>
                  <Card.Text className="CashBack__cards__text">
                    {" "}
                    $1.6M
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <Card className="CashBack__cards">
                <Card.Body>
                  <Card.Title className="CashBack__cards__title">
                    Today's Unclaimed Cash Back
                  </Card.Title>
                  <Card.Text className="CashBack__cards__text">
                    <NumberFormat
                      value={seconds}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      renderText={(value) => <div> {value} </div>}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <Card className="CashBack__cards">
                <Card.Body>
                  <Card.Title className="CashBack__cards__title">
                    Cash Back available this year
                  </Card.Title>
                  <Card.Text className="CashBack__cards__text">$300M</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="CashBack__imageBot">
        <img src={botSvg} alt="svg background" />
      </div>
    </div>
  );
}

export default CashBack;
