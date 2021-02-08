import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Contact.css";
import phone from "../../assets/images/phone.svg";
import location from "../../assets/images/location.svg";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="Contact">
        <section id="ContactUs">
          <Container fluid>
            <Row>
              <Col>
                <div className="Contact__heading">
                  <h3> Contact Us</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8} lg={6}>
                <Card className="Contact__card">
                  <Card.Body>
                    <Card.Title className="Contact__card__title">
                      Contact Information
                    </Card.Title>
                    <Card.Subtitle className="Contact__card__subTitle">
                      Fill up the form and our Team will get back to you within
                      24 hrs.
                    </Card.Subtitle>
                    <Card.Text className="Contact__card__text">
                      <div className="details">
                        <img src={phone} alt={"call"} />{" "}
                        <span className="li__text">
                          <a href="tel:+1888-600-4017">(+1) 888-600-4017</a>
                        </span>
                      </div>
                      <div className="details">
                        <img
                          className="details__location"
                          src={location}
                          alt="location"
                        />{" "}
                        <span className="li__text">
                          <a href="https://www.bing.com/maps?where=79%20Wellington%20St%20W%2C%201620%2C%20Toronto%2C%20Ontario%20M5J%201B1%2C%20CA">
                            79 Wellington St W, 1620, Toronto, Ontario M5J 1B1,
                            CA
                          </a>{" "}
                        </span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={6}>
                <Form
                  className="contact_form"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/f/mrgodrwz"
                  method="POST"
                >
                  <Form.Group controlId="formBasicFullName">
                    <Form.Label>
                      Full Name{" "}
                      <span class="star" style={{ color: "red" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter you name..."
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      Email address{" "}
                      <span class="star" style={{ color: "red" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="email@xyzmail.com"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>
                      Phone Number{" "}
                      <span class="star" style={{ color: "red" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="+1 519 981 6636"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      Message{" "}
                      <span class="star" style={{ color: "red" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Enter your message..."
                      required
                    />
                  </Form.Group>
                  <div className="button__group">
                    {status === "SUCCESS" ? (
                      <p>Thanks! We will get back to you shortly.</p>
                    ) : (
                      <Button
                        className="submit__button"
                        variant="dark"
                        type="submit"
                      >
                        Submit
                      </Button>
                    )}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
