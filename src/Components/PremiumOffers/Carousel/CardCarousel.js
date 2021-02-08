import React from "react";
import "./CardCarousel.css";
import Carousel from "react-elastic-carousel";
import { Card } from "react-bootstrap";

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 1 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
      { width: 1450, itemsToShow: 3 },
      { width: 1750, itemsToShow: 3 },
    ];
  }
  render() {
    return (
      <Carousel breakPoints={this.breakPoints} pagination={false}>
        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              $30,000 IN CASH BACK
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://dg9fwwnhsc423.cloudfront.net/dev/1575279481952offer1.jpeg"
            />
          </a>
          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Earn thousands in cash rewards on select projects.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              PROPERTIES UNDER 1 MILLION
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%22minPrice%22:0,%22maxPrice%22:1000000%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://i0.wp.com/zomagazine.com/wp-content/uploads/2020/07/toronto.jpg?fit=1350%2C900&ssl=1"
            />
          </a>

          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Explore properties listed at under 1 million.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              2 BEDROOM UNITS
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%22bedRoom%22:2%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://dg9fwwnhsc423.cloudfront.net/dev/1575279485661offer3.jpeg"
            />
          </a>
          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Available 2 bedroom units at very affordable prices.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              $30,000 IN CASH BACK
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://dg9fwwnhsc423.cloudfront.net/dev/1575279481952offer1.jpeg"
            />
          </a>
          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Earn thousands in cash rewards on select projects.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              PROPERTIES UNDER 1 MILLION
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%22minPrice%22:0,%22maxPrice%22:1000000%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://i0.wp.com/zomagazine.com/wp-content/uploads/2020/07/toronto.jpg?fit=1350%2C900&ssl=1"
            />
          </a>

          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Explore properties listed at under 1 million.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Carousel__offers">
          <div className="title__block">
            <Card.Title className="Carousel__offers__title">
              2 BEDROOM UNITS
            </Card.Title>
          </div>
          <a href="https://www.hauskey.com/main/project-listing?searchCriteria=%7B%22bedRoom%22:2%7D">
            <Card.Img
              variant="top"
              className="Carousel__offers__images"
              src="https://dg9fwwnhsc423.cloudfront.net/dev/1575279485661offer3.jpeg"
            />
          </a>
          <Card.Body>
            <Card.Text className="Carousel__offers__desc">
              Available 2 bedroom units at very affordable prices.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    );
  }
}

export default CardCarousel;
