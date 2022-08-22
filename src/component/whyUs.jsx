import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import complete from "../assets/complete.svg";
import icon_price from "../assets/icon_price.svg";
import icon_24hrs from "../assets/icon_24hrs.svg";
import icon_professional from "../assets/icon_professional.svg";

const WhyUs = () => {
  return (
    <Container
      id="whyUs"
      style={{
        marginTop: "118px",
        paddingLeft: "136px",
        paddingRight: "136px",
      }}
      fluid
    >
      <h2 style={{marginBottom: "16px"}}>Why Us?</h2>
      <h3 style={{marginBottom: "24px"}}>
        Mengapa harus pilih Binar Car Rental?
      </h3>
      <Row className="d-flex justify-content-between " style={{margin: "0"}}>
        <Col xl={3}>
          <img
            style={{marginBottom: "16px"}}
            src={complete}
            alt="complete"
            loading="lazy"
          />
          <div style={{marginBottom: "16px"}}>Mobil Lengkap</div>
          <p>
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </p>
        </Col>
        <Col xl={3}>
          <img
            style={{marginBottom: "16px"}}
            src={icon_price}
            alt="price"
            loading="lazy"
          />
          <div style={{marginBottom: "16px"}}>Harga Murah</div>
          <p>
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </p>
        </Col>
        <Col xl={3}>
          <img
            style={{marginBottom: "16px"}}
            src={icon_24hrs}
            alt="icon_24hrs"
            loading="lazy"
          />
          <div style={{marginBottom: "16px"}}>Layanan 24 Jam</div>
          <p>
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </p>
        </Col>
        <Col xl={3}>
          <img
            style={{marginBottom: "16px"}}
            src={icon_professional}
            alt="icon_professional"
            loading="lazy"
          />
          <div style={{marginBottom: "16px"}}>Supir Profesional</div>
          <p>
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
