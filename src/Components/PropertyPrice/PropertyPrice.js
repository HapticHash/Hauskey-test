import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import "./PropertyPrice.css";
import { Col, Container, Row } from "react-bootstrap";

function PropertyPrice() {
  const [value, setValue] = useState(2500000);
  const val = ((value * 3) / 100).toFixed();
  return (
    <div className="PropertyPrice">
      <section id="Property-Price">
        <Container fluid>
          <Row>
            <Col>
              <div className="PropertyPrice__head">
                <h3>Save money to buy future</h3>
              </div>
            </Col>
          </Row>
          <div className="PropertyPrice__group">
            <Row>
              <Col sm={12} md={4}>
                <div className="PropertyPrice__content__price">
                  <h2>Don’t leave any money on the table!</h2>
                  <p>
                    See how much money Haüskey can put back into your pocket.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={8}>
                <div className="PropertyPrice__range__slider__top">
                  <div className="PropertyPrice__range__slider__value__top">
                    <h3>Property Price:</h3>
                    <p>
                      <NumberFormat
                        value={value}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value) => <p>{value}</p>}
                      />
                    </p>
                  </div>
                </div>

                <div className="PropertyPrice__slider">
                  <div className="min__value">
                    <span>$0</span>
                  </div>
                  <div className="slider__container">
                    <RangeSlider
                      value={value}
                      min="0"
                      max="5000000"
                      step="100"
                      tooltip="off"
                      variant="dark"
                      onChange={(changeEvent) =>
                        setValue(changeEvent.target.value)
                      }
                    />
                  </div>
                  <div className="max__value">
                    <span>$5.0M</span>
                  </div>
                </div>

                <div className="PropertyPrice__range__slider__bot">
                  <div className="PropertyPrice__range__slider__value__bot">
                    <h3>Cash Back:</h3>

                    <NumberFormat
                      value={val}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"~$"}
                      renderText={(val) => <p>{val}</p>}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default PropertyPrice;
