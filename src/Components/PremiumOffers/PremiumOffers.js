import React from "react";
import "./PremiumOffers.css";
import CardCarousel from "./Carousel/CardCarousel";
import topSvg from "../../assets/images/bg-section-top-desktop-2.svg";
import botSvg from "../../assets/images/bg-section-top-desktop-1.svg";
import { Row, Container } from "react-bootstrap";

function PremiumOffers() {
  return (
    <div className="PremiumOffers">
      <section id="QuickSearch">
        <div className="CashBack__imageTop">
          <img src={topSvg} alt="svg background" />
        </div>
        <div className="mod">
          <div className="PremiumOffers__head">
            <h3>Quick Search</h3>
          </div>
          <p className="PremiumOffers__para">For our registered members</p>

          <div className="PremiumOffers__Owl">
            <Container fluid>
              <Row>
                <CardCarousel />
              </Row>
            </Container>
          </div>
        </div>

        <div className="CashBack__imageBot">
          <img src={botSvg} alt="svg background" />
        </div>
      </section>
    </div>
  );
}

export default PremiumOffers;
