import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import PreConstruction from "../../assets/images/PreConstruction.gif";
import AdvanceSearch from "../../assets/images/AdvanceSearch.gif";
import Assignment from "../../assets/images/Assignment.gif";

function Home() {
  return (
    <div className="Home">
      <section id="Home">
        <Container fluid>
          <Row>
            <Col>
              <div className="Home__head">
                <h3>Simplified the way to search </h3>
              </div>
            </Col>
          </Row>
          <div className="Home__steps">
            <Row>
              <Col>
                <div className="Home__title">
                  <span className="Home__title__mod">
                    Looking for Pre-Construction Condo?
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="Home__desc">
              <Col xs={12} md={8} lg={8}>
                <Image
                  className="Home__demo"
                  src={PreConstruction}
                  alt="Pre-construction intro"
                  rounded
                />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div className="Home__demo__text">
                  We’ve simplified the way you search, secure and purchase a
                  pre-construction property, while also rewarding you thousands
                  in cash back. And our platform is what makes it possible.
                  Begin the search of pre-construction condo based on cities,
                  projects or by location today.
                </div>
                <div className="Home__button_block">
                  <a href="https://www.hauskey.com/">
                    <Button
                      className="Home__button"
                      variant="dark"
                      type="submit"
                    >
                      Start my search
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="Home__steps">
            <Row>
              <Col>
                <div className="Home__title">
                  <span className="Home__title__mod">
                    Customize your Search
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="Home__desc">
              <Col xs={12} md={4} lg={4} className="Home__text">
                <div className="Home__demo__text">
                  With our intuitive search bar you can customize your search
                  based on location, price range, room options, and a full array
                  of amenities. Use our map view to explore areas, set geofences
                  and discover points of interest including walk scores, commute
                  times and restaurants nearby.
                </div>
                <div className="Home__button_block">
                  <a href="https://www.hauskey.com/">
                    <Button
                      className="Home__button"
                      variant="dark"
                      type="submit"
                    >
                      Let me customize
                    </Button>
                  </a>
                </div>
              </Col>
              <Col xs={12} md={8} lg={8} className="Home__img">
                <Image
                  className="Home__demo"
                  src={AdvanceSearch}
                  alt="Pre-construction intro"
                  rounded
                />
              </Col>
            </Row>
          </div>
          <div className="Home__steps">
            <Row>
              <Col>
                <div className="Home__title">
                  <span className="Home__title__mod">
                    Are you an Assignment Buyer?
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="Home__desc">
              <Col xs={12} md={8} lg={8}>
                <Image
                  className="Home__demo"
                  src={Assignment}
                  alt="Pre-construction intro"
                  rounded
                />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div className="Home__demo__text">
                  We’ve also simplified the way you search based on cities, or
                  by location, while being totally secure to complete an
                  Assignment Sale, while also rewarding you thousands in cash
                  back. You can also list your Assignment on Haüskey’s industry
                  leading Marketplace.
                </div>
                <div className="Home__button_block">
                  <a href="https://www.hauskey.com/">
                    <Button
                      className="Home__button"
                      variant="dark"
                      type="submit"
                    >
                      Take me there
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
