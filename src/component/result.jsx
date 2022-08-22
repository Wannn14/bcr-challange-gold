import React from "react";
import {Col, Card, Button} from "react-bootstrap";
import {Num} from "../utiliti/comp";
import {useNavigate} from "react-router-dom";
const Result = ({item}) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`detail/${item.id}`);
  };
  return (
    <Col lg={4}>
      <Card className="mt-4" style={{minheight: "478px"}}>
        <Card.Img
          style={{height: "160px", width: "270px"}}
          variant="top"
          className="mt-2 m-auto"
          src={item.image}
          loading="lazy"
        />
        <Card.Body className="mt-5">
          <Card.Title className=" mb-3 mt-3">{item.name}</Card.Title>
          <Card.Subtitle className=" mb-3">
            Rp. {Num.format(item.price)} / hari
          </Card.Subtitle>
          <Card.Text className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <div className="d-grid">
            <Button className=" mt-2" size="md" onClick={handleDetail}>
              Pilih Mobil
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Result;
