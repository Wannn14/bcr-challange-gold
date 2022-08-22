import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import carbg from "../assets/carbg.svg";
import {Link} from "react-router-dom";

const Banner = ({showButton}) => {
  return (
    <Row style={{margin: "0", minHeight: "440px", backgroundColor: "#F1F3FF"}}>
      <Col
        style={{
          paddingLeft: "136px",
          paddingTop: "118px",
          paddingRight: "16px",
        }}
        md={6}
      >
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <div style={{marginTop: "16px", marginBottom: "16px"}}>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        {showButton ? (
          <Button as={Link} to="/search" style={{marginTop: "16px"}}>
            Mulai Sewa Mobil
          </Button>
        ) : (
          <Button as={Link} to="/" style={{marginTop: "16px"}}>
            Kembali
          </Button>
        )}
      </Col>
      <Col
        className="d-flex justify-content-end align-items-end"
        style={{paddingLeft: "16px", paddingRight: "0px"}}
        md={6}
      >
        <img
          src={carbg}
          alt="car"
          loading="lazy"
          style={{width: "100%", height: "auto"}}
        />
      </Col>
    </Row>
  );
};

export default Banner;
