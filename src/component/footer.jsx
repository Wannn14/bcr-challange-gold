import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import icon_facebook from "../assets/icon_facebook.svg";
import icon_instagram from "../assets/icon_instagram.svg";
import icon_twitter from "../assets/icon_twitter.svg";
import icon_mail from "../assets/icon_mail.svg";
import icon_twitch from "../assets/icon_twitch.svg";
import Rec74 from "../assets/Rec74.svg";

const Footer = () => {
  const containerStyle = {
    marginBottom: "100px",
    marginTop: "150px",
    padding: "0",
    marginLeft: "136px",
    marginRight: "136px",
  };
  return (
    <footer>
      <Container style={containerStyle}>
        <Row>
          <Col md={2}>
            <p>
              <strong>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </strong>
            </p>
            <p>
              <strong>binarcarrental@gmail.com</strong>
            </p>
            <p>
              <strong>081-233-334-808</strong>
            </p>
          </Col>
          <Col md={{span: 2, offset: 1}}>
            <h5>
              <a
                style={{textDecoration: "none", color: "black"}}
                href="#ourServices"
              >
                Our Services
              </a>
            </h5>
            <h5>
              <a style={{textDecoration: "none", color: "black"}} href="#whyUs">
                Why Us
              </a>
            </h5>
            <h5>
              <a
                style={{textDecoration: "none", color: "black"}}
                href="#testimonial"
              >
                Testimonial
              </a>
            </h5>
            <h5>
              <a style={{textDecoration: "none", color: "black"}} href="#faq">
                FAQ
              </a>
            </h5>
          </Col>
          <Col md={3}>
            <p>
              <strong>Connect with us</strong>
            </p>

            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              <img
                src={icon_facebook}
                style={{marginBottom: "14px", marginRight: "16px"}}
                alt="facebook"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={icon_instagram}
                style={{marginBottom: "14px", marginRight: "16px"}}
                alt="instagram"
                loading="lazy"
              />
            </a>
            <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
              <img
                src={icon_twitter}
                style={{marginBottom: "14px", marginRight: "16px"}}
                alt="twitter"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.mail.google.com"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={icon_mail}
                style={{marginBottom: "14px", marginRight: "16px"}}
                alt="mail"
                loading="lazy"
              />
            </a>
            <a href="https://www.twitch.com" rel="noreferrer" target="_blank">
              <img
                src={icon_twitch}
                style={{marginBottom: "14px", marginRight: "16px"}}
                alt="twitch"
                loading="lazy"
              />
            </a>
          </Col>
          <Col md={3}>
            <p>
              <strong>Copyright Binar 2022</strong>
            </p>
            <img
              style={{marginBottom: "14px"}}
              src={Rec74}
              alt="logo"
              loading="lazy"
            ></img>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
