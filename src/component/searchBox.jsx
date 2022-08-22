import React, {useState} from "react";
import {Container, Form, Button, Row} from "react-bootstrap";
import Select from "react-select";
import {categoryList, PriceList, StatusList} from "../utiliti/comp";
import swal from "sweetalert";
import Result from "./result";

const SearchBox = ({carData}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#C9E7CA",
        primary: "#5CB85F",
      },
    };
  };
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      minWidth: "208px",
      borderRadius: "2px",
      cursor: "pointer",
    }),
    option: (styles) => {
      return {...styles, cursor: "pointer"};
    },
    indicatorSeparator: (styles) => ({...styles, opacity: "0"}),
    menu: (styles) => ({...styles, minWidth: "208px"}),
  };
  const colorStyles2 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      minWidth: "219px",
      borderRadius: "2px",
      cursor: "pointer",
    }),
    option: (styles) => {
      return {...styles, cursor: "pointer"};
    },
    indicatorSeparator: (styles) => ({...styles, opacity: "0"}),
    menu: (styles) => ({...styles, minWidth: "219px"}),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length !== 0 || category.length !== 0 || price.length !== 0) {
      if (price === "<400000") {
        let temp = carData.filter((e) => {
          return (
            e.name.toLowerCase().includes(name.toLowerCase()) &&
            e.category.includes(category) &&
            e.price <= 400000
          );
        });
        if (temp.length) {
          setResult(temp);
          console.log(temp);
        } else {
          swal("Error", "tidak ditemukan!", "error");
          setResult(null);
        }
      } else if (price === "400000-600000") {
        let temp = carData.filter((e) => {
          return (
            e.name.toLowerCase().includes(name.toLowerCase()) &&
            e.category.includes(category) &&
            e.price >= 400000 &&
            e.price <= 600000
          );
        });
        if (temp.length) {
          setResult(temp);
          console.log(temp);
        } else {
          swal("Error", "tidak ditemukan!", "error");
          setResult(null);
        }
      } else if (price === ">600000") {
        let temp = carData.filter((e) => {
          return (
            e.name.toLowerCase().includes(name.toLowerCase()) &&
            e.category.includes(category) &&
            e.price >= 600000
          );
        });
        if (temp.length) {
          setResult(temp);
          console.log(temp);
        } else {
          swal("Error", "tidak ditemukan!", "error");
          setResult(null);
        }
      } else {
        let temp = carData.filter((e) => {
          return (
            e.name.toLowerCase().includes(name.toLowerCase()) &&
            e.category.includes(category)
          );
        });
        if (temp.length) {
          setResult(temp);
          console.log(temp);
        } else {
          swal("Error", "tidak ditemukan!", "error");
          setResult(null);
        }
      }
    } else {
      swal("Error", "Isikan minimal 1 kolom!", "error");
    }
  };
  const handleClick = () => {
    setShow(false);
  };
  return (
    <Container
      id="search"
      style={{
        paddingLeft: "196px",
        paddingRight: "196px",
        marginTop: "-42px",
      }}
      fluid
    >
      <div id={show ? "highlight" : null}>
        {result ? <div style={{marginBottom: "16px"}}>Pencarianmu</div> : <></>}
        <div>
          <Form
            onSubmit={handleSubmit}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
          >
            <div className="d-flex justify-content-between ">
              <div>
                <Form.Label style={{marginBottom: "4px"}}>
                  Nama Mobil
                </Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ketik Nama/Tipe Mobil"
                />
              </div>
              <div>
                <Form.Label style={{marginBottom: "4px"}}>Kategori</Form.Label>
                <Select
                  onChange={(e) => setCategory(e.value)}
                  options={categoryList}
                  styles={colorStyles}
                  placeholder="Masukan Kapasitas Mobil"
                  theme={customTheme}
                />
              </div>
              <div>
                <Form.Label style={{marginBottom: "4px"}}>Harga</Form.Label>
                <Select
                  onChange={(e) => setPrice(e.value)}
                  options={PriceList}
                  styles={colorStyles2}
                  placeholder="Masukan Harga Sewa Per Hari"
                  theme={customTheme}
                />
              </div>
              <div>
                <Form.Label style={{marginBottom: "4px"}}>Status</Form.Label>
                <Select
                  options={StatusList}
                  styles={colorStyles}
                  placeholder="Disewa"
                  theme={customTheme}
                />
              </div>
              <div className="d-flex flex-column-reverse">
                {result ? (
                  <Button
                    variant="outline-primary"
                    style={{
                      backgroundColor: "white",
                      color: "#0D28A6",
                      border: "1px solid",
                    }}
                    type="submit"
                    onClick={handleClick}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button type="submit" onClick={handleClick}>
                    Cari Mobil
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Row>
        {result && result.map((item) => <Result key={item.id} item={item} />)}
      </Row>
    </Container>
  );
};

export default SearchBox;
