import React from "react";
import "./AppFooter.css";
import { Container, Row } from "react-bootstrap";

function AppFooter() {
  return (
    <footer className="AppFooter__main">
      <Container fluid>
        <Row>
          <div class="AppFooter__content">
            <div class="AppFooter__logo">
              <img
                alt="hauskey_logo_footer"
                src="https://www.hauskey.com/assets/images/footer.svg"
              />
            </div>
            <ul class="AppFooter__login___user___link AppFooter__login__user">
              <li id="login">
                <a href="#login">Login</a>
              </li>
              <li id="signup">
                <a href="#signup">| Sign Up</a>
              </li>
            </ul>
            <ul class="AppFooter__login___user___link ">
              <li>
                Contact Us:
                <a href="mailto:customercare@hauskey.com">
                  <b>customercare@hauskey.com</b>
                </a>
              </li>
            </ul>
          </div>
        </Row>
        <div className="AppFooter__mid__content">
          <div className="row">
            <div class="col-md-3 col-sm-6 col-12">
              <div class="AppFooter__app__link AppFooter__app__link__footer">
                <ul>
                  <li id="ios_link">
                    <a
                      href="https://apps.apple.com/ca/app/hauskey/id1477303720"
                      target="_blank"
                    >
                      <img
                        alt="app_store"
                        src="https://www.hauskey.com/assets/images/ic_ios.png"
                      />
                    </a>
                  </li>
                  <li id="android_link">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hauskey"
                      target="_blank"
                    >
                      <img
                        alt="play_store"
                        src="https://www.hauskey.com/assets/images/google-play-badge.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <ul class="AppFooter__links">
                <li id="about_us">
                  <a href="#about">About Us</a>
                </li>
                <li id="howitworks">
                  <a href="#howitworks">How Haüskey Works</a>
                </li>
                <li id="faq">
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <a href="https://calendly.com/wmagill/" target="_blank">
                    Book An Appointment
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <ul class="AppFooter__links">
                <li id="privacy">
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li id="terms">
                  <a href="#terms">Terms &amp; Conditions</a>
                </li>
                <li id="refer">
                  <a href="#rewards">Refer and Earn</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <ul class="AppFooter__links">
                <li id="team">
                  <a href="#team">Our Team</a>
                </li>
                <li id="blog">
                  <a href="https://blog.hauskey.com/">Blog</a>
                </li>
                <li id="contact_us">
                  <a href="#contactUs">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="AppFooter__copyright__container">
          <div class="AppFooter__copy__left">
            <p>
              Copyright © 2020 Haüskey Realty, Brokerage | All rights reserved
            </p>
          </div>
          <div class="AppFooter__copy__right">
            <ul>
              <li id="facebook">
                <a href="https://www.facebook.com/hauskeyapp" target="_blank">
                  <img
                    alt="fb_img"
                    src="https://www.hauskey.com/assets/images/fb.svg"
                  />
                </a>
              </li>
              <li id="instagram">
                <a href="https://www.instagram.com/hauskeyapp/" target="_blank">
                  <img
                    alt="insta_img"
                    src="https://www.hauskey.com/assets/images/insta.svg"
                  />
                </a>
              </li>
              <li id="linkedin">
                <a
                  href="https://www.linkedin.com/company/hauskey/"
                  target="_blank"
                >
                  <img
                    alt="linkedin_img"
                    src="https://www.hauskey.com/assets/images/ldn.svg"
                  />
                </a>
              </li>
              <li id="twitter">
                <a href="https://twitter.com/hauskeyapp" target="_blank">
                  <img
                    alt="twitter_img"
                    src="https://www.hauskey.com/assets/images/twitter.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default AppFooter;
