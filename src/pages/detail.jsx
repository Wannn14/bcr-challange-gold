import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Form,
  Button,
} from "react-bootstrap";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL, Num} from "../utiliti/comp";
import fi_users from "../assets/fi_users.svg";

const Detail = () => {
  const {id} = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + id)
      .then((res) => {
        const result = res.data;
        setState(result);
      })
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F1F3FF",
          height: "206px",
          paddingLeft: "",
        }}
      >
        <Container
          style={{minHeight: "125px"}}
          className="d-flex flex-column-reverse"
        >
          <Button onClick={goBack}> Kembali </Button>
        </Container>
      </div>
      <Container className="mb-4" style={{marginTop: "-71px"}}>
        <Card className="ps-4 pt-3 pe-4 pb-4">
          <h5 className="mb-3 mt-2 font2">Pencarianmu</h5>

          <Form>
            <Row>
              <Col md={3}>
                <Form.Label className="text-muted ">Nama Mobil</Form.Label>

                <Form.Control
                  style={{borderRadius: "2px", backgroundColor: "#D0D0D0"}}
                  type="text"
                  disabled
                />
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted">Kategori</Form.Label>
                <Form.Select
                  style={{borderRadius: "2px", backgroundColor: "#D0D0D0"}}
                  type="text"
                  disabled
                ></Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted ">
                  Harga Sewa Per Hari
                </Form.Label>
                <Form.Select
                  style={{borderRadius: "2px", backgroundColor: "#D0D0D0"}}
                  type="text"
                  disabled
                ></Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted ">Status</Form.Label>
                <Form.Select
                  style={{borderRadius: "2px", backgroundColor: "#D0D0D0"}}
                  type="text"
                  disabled
                ></Form.Select>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      <Container>
        <Row>
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-3 ">Tentang Paket</Card.Title>

                <h3>Include</h3>
                <ul className="text-muted ">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h3>Exclude</h3>
                <ul className="text-muted ">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <Accordion defaultActiveKey={["0"]} flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header id="accor">
                      <h2>Refund, Reschedule, Overtime</h2>{" "}
                    </Accordion.Header>
                    <Accordion.Body
                      style={{paddingLeft: "0", paddingRight: "0"}}
                    >
                      <ul className="text-muted ">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  state.image
                    ? state.image
                    : "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"
                }
                alt={state.name}
                loading="lazy"
              />
              <Card.Body>
                <Card.Title>{state.name}</Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{fontSize: "10px", fontWeight: "700"}}
                >
                  <img src={fi_users} alt="users" loading="lazy"></img>{" "}
                  {state.category === "small" ? "4 - 6 orang" : state.category}
                </Card.Subtitle>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div>Total</div>
                  <div>Rp. {Num.format(state.price)}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
