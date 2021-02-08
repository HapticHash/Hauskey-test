import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <div className="FeaturedProjects">
      <section id="FeaturedProjects">
        <Container fluid>
          <div class="FeaturedProjects__head">
            <h3>Featured Projects</h3>
          </div>
          <div className="PremiumOffers__Owl">
            <Row>
              <Col xs={12} md={6} lg={4} className="FeaturedProjects__col">
                <div className="FeaturedProjects__card1">
                  <Card className="FeaturedProjects__card">
                    <a href="https://www.hauskey.com/main/project/160">
                      <Card.Img
                        variant="top"
                        src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/thumbnails/1585774737976"
                      />
                    </a>
                    <Card.Body>
                      <Card.Title className="FeaturedProjects__card__title">
                        Sugar Wharf Condominiums
                      </Card.Title>
                      <Card.Subtitle className="FeaturedProjects__card__subTitle">
                        Cashback starting from C$22,200
                      </Card.Subtitle>
                      <Card.Text className="FeaturedProjects__card__text">
                        Nestled on Toronto’s Waterfront, Sugar Wharf
                        Condominiums is everything you’ve been dreaming of. A
                        place where dreams, work and play live happily. It’s
                        where homes, offices, shopping, restaurants, daycare,
                        transit, schools and parks are rolled into one magical
                        community.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="FeaturedProjects__col">
                <Card className="FeaturedProjects__card">
                  <a href="https://www.hauskey.com/main/project/169">
                    <Card.Img
                      variant="top"
                      src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/thumbnails/1595261864125"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title className="FeaturedProjects__card__title">
                      Empire Quay House
                    </Card.Title>
                    <Card.Subtitle className="FeaturedProjects__card__subTitle">
                      Cashback starting from C$11,900
                    </Card.Subtitle>
                    <Card.Text className="FeaturedProjects__card__text">
                      Where the city meets the waterfront, great things are sure
                      to happen. Located in Toronto’s budding employment and
                      innovation district, Quay House will offer its residents
                      the opportunity to live in a people-centric, sustainable
                      community that will grow and evolve as they do.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4} className="FeaturedProjects__col">
                <Card className="FeaturedProjects__card">
                  <a href="https://www.hauskey.com/main/project/164">
                    <Card.Img
                      variant="top"
                      src="https://hauskey-dev.s3.ca-central-1.amazonaws.com/thumbnails/1590514699027"
                    />{" "}
                  </a>
                  <Card.Body>
                    <Card.Title className="FeaturedProjects__card__title">
                      Notting Hill 2 Condos
                    </Card.Title>
                    <Card.Subtitle className="FeaturedProjects__card__subTitle">
                      Cashback starting from C$11,967
                    </Card.Subtitle>
                    <Card.Text className="FeaturedProjects__card__text">
                      Unique. Charming and cosmopolitan. A desirable way of life
                      and iconic way of living. Inspired by the much heralded
                      community in Central London, Notting Hill is celebrated
                      for its colourful culture and upscale shops along
                      Portobello Road, creating one of London’s most popular
                      tourist destination.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default FeaturedProjects;
