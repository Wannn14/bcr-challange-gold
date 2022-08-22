import React from "react";
import {Button, Container, Row} from "react-bootstrap";

const Jumbo = () => {
  return (
    <Container fluid>
      <div className="text-center">
        <Row md={12}>
          <h1
            style={{
              marginTop: "52px",
              marginBottom: "16px",
              padding: "0",
            }}
          >
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
        </Row>
        <Row md={12} className="d-flex justify-content-center">
          <p style={{maxWidth: "468px", padding: "0"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </Row>
        <Row
          md={3}
          style={{marginTop: "52px"}}
          className="d-flex justify-content-center"
        >
          <Button style={{marginTop: "16px"}}>Mulai Sewa Mobil</Button>
        </Row>
      </div>
    </Container>
  );
};

export default Jumbo;
