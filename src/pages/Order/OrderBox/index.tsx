import React, { useState, useEffect, useRef } from "react";
import { Divider, Input, Select, Space } from "antd";
import type { InputRef } from "antd";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";

// import stylesheets
import "./orderbox.scss";

// import steps
import Steps from "../../../components/Steps";

// import labels
import { SBigLabel1 } from "../../../components/Label/SLabel1";

import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";
import { BigLabel4 } from "../../../components/Label/Label4";
import { BigLabel5 } from "../../../components/Label/Label5";
import { BigLabel6 } from "../../../components/Label/Label6";
import { BigLabel7 } from "../../../components/Label/Label7";
import { BigLabel8 } from "../../../components/Label/Label8";
import { BigLabel9 } from "../../../components/Label/Label9";
import { BigLabel10 } from "../../../components/Label/Label10";
import { BigLabel11 } from "../../../components/Label/Label11";
import { BigLabel12 } from "../../../components/Label/Label12";
import { BigLabel13 } from "../../../components/Label/Label13";
import { BigLabel14 } from "../../../components/Label/Label14";
import { BigLabel15 } from "../../../components/Label/Label15";
import { BigLabel16 } from "../../../components/Label/Label16";
import { BigLabel17 } from "../../../components/Label/Label17";
import { BigLabel18 } from "../../../components/Label/Label18";
import { BigLabel19 } from "../../../components/Label/Label19";
import { BigLabel20 } from "../../../components/Label/Label20";
import { BigLabel21 } from "../../../components/Label/Label21";
import { BigLabel22 } from "../../../components/Label/Label22";
import { BigLabel23 } from "../../../components/Label/Label23";
import { BigLabel24 } from "../../../components/Label/Label24";
import { BigLabel25 } from "../../../components/Label/Label25";
import { BigLabel26 } from "../../../components/Label/Label26";
import { BigLabel27 } from "../../../components/Label/Label27";
import { BigLabel28 } from "../../../components/Label/Label28";
import { BigLabel29 } from "../../../components/Label/Label29";
import { BigLabel30 } from "../../../components/Label/Label30";
import { useStepContext } from "@mui/material";
import { Helmet } from "react-helmet";

let index = 0;

const OrderBox: React.FC = () => {
  const G: any = myStore();
  const { T, update }: any = myStore();
  const navigate = useNavigate();

  const [price, setPrice] = useState(7);
  const [count, setCount] = useState(5);
  const [priceIndex, setPriceIndex] = useState(0);
  const printRef = React.useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState("/en");

  const [check, setCheck] = useState("small");
  const [selectedValue, setSelectedValue] = React.useState("a");

  const [items, setItems] = useState([
    `5 labels (${(7 + G.vat * 7) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `12 labels (${(14 + G.vat * 14) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `36 labels (${(22 + G.vat * 22) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `48 labels (${(28 + G.vat * 28) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `72 labels (${(38 + G.vat * 38) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `120 labels (${(56 + G.vat * 56) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `200 labels (${(86 + G.vat * 86) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
    `500 labels (${(170 + G.vat * 170) * (G.currency == "EUR" ? 1 : 10)} ${
      G.currency == "EUR" ? "€" : "kr"
    })`,
  ]);
  const arrPrice = [7, 14, 22, 28, 38, 56, 86, 170];
  const arrCount = [5, 12, 36, 48, 72, 120, 200, 500];
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleRadioChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  useEffect(() => {
    if(G.lang == "en-US") setLang("/en");
    else if(G.lang == "sw-SW") setLang("/sv");
    else setLang("/es");
  }, []);

  const toShippingPage = () => {
    update({ price: price, size: check, count: count });
    if (G.lang === "en-US") 
    { 
      navigate("/en/shipping");
    }
    if (G.lang === "sw-SW") {
      navigate("/sv/shipping");
    }
    if (G.lang === "es-ES") {
      navigate("/es/shipping");
    }
  };

  const handlePrice = (val: any) => {
    setPrice(arrPrice[val]);
    setCount(arrCount[val]);
    setPriceIndex(val);
  };

  return (
    <>
      <Helmet>
        <title>
          {T("title.browse")}
        </title>
        <meta name="title" content={T("title.browse")} />
        <meta
          name="description"
          content={T("description.browse")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
    <div className="orderbox">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 order-div">
            <div className="step-div">
              <Steps />
            </div>
            <h1 className="gradient-h1">{T("order.title")}</h1>
            <h2>{T("order.content")}</h2>
            <Row className="row-mt-20">
              <h3>Side</h3>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ marginLeft: "10px" }}
                >
                  <Radio
                    {...controlProps("a")}
                    sx={{
                      color: "#FEA150",
                      "&.Mui-checked": {
                        color: "#EE9140",
                      },
                    }}
                  />
                  <p className="order-text">{T("home.front")}</p>
                  {/* <Radio
                    {...controlProps("b")}
                    sx={{
                      color: "#FEA150",
                      "&.Mui-checked": {
                        color: "#EE9140",
                      },
                    }}
                  />
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 3px",
                    }}
                  >
                    {T("home.back")}
                  </p> */}
                </RadioGroup>
              </FormControl>
            </Row>
            <Row className="row-mt-20">
              <Col className="col-12">
                <h4>{T("order.numberoflabels")}</h4>
                <Select
                  className="width-100"
                  placeholder="Order Label Count"
                  onChange={(val) => {
                    handlePrice(val);
                  }}
                  value={priceIndex}
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      {/* <Divider /> */}
                      {/* <Space> */}
                      {/* <Input
                          placeholder="Please enter item"
                          ref={inputRef}
                          value={name}
                          onChange={onNameChange}
                        /> */}
                      {/* <button
                          onClick={() => addItem}
                          style={{ border: "none", background: "transparent" }}
                        >
                          + Add item
                        </button> */}
                      {/* </Space> */}
                    </>
                  )}
                  options={items.map((item, index) => ({
                    label: item,
                    value: index,
                    key: index,
                  }))}
                />
              </Col>
            </Row>

            <Row className="row-mt-20">
              <Col className="col-12">
                <h4 className="order-comment">{T("order.comment")}</h4>
              </Col>
            </Row>

            <Row className="row-mt-20">
              <Col className="col-12">
                <h4>{T("order.size")}</h4>
                <ul className="donate-now">
                  <li>
                    <input
                      type="radio"
                      id="a25"
                      name="amount"
                      checked={check === "small" ? true : false}
                      onChange={() => setCheck("small")}
                    />
                    <label htmlFor="a25" className="small">
                      {T("order.small")} (97.6 * 90mm)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="a50"
                      name="amount"
                      checked={check === "small" ? false : true}
                      onChange={() => setCheck("big")}
                    />
                    <label htmlFor="a50" className="big">
                      {T("order.big")} (104 * 100mm)
                    </label>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="row-mt-50">
              <Col className="col-4">
                <button className="order-btn" onClick={toShippingPage}>
                  {T("order.next")}
                </button>
              </Col>

              <Col className="col-4">
                or
                <Link to={lang + "/edit"}>
                  <button className="back-btn">{T("order.back")}</button>
                </Link>
              </Col>
              <Col className="col-4"></Col>
            </Row>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 order-label-div">
            <div ref={printRef} className="height-380">
              {G.curLabel === 0 ? (
                <SBigLabel1
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 1 ? (
                <BigLabel1
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 2 ? (
                <BigLabel2
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 3 ? (
                <BigLabel3
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 4 ? (
                <BigLabel4
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 5 ? (
                <BigLabel5
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 6 ? (
                <BigLabel6
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 7 ? (
                <BigLabel7
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 8 ? (
                <BigLabel8
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  file={G && G.file}
                />
              ) : G.curLabel === 9 ? (
                <BigLabel9
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 10 ? (
                <BigLabel10
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 11 ? (
                <BigLabel11
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 12 ? (
                <BigLabel12
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 13 ? (
                <BigLabel13
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 14 ? (
                <BigLabel14
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 15 ? (
                <BigLabel15
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 16 ? (
                <BigLabel16
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 17 ? (
                <BigLabel17
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 18 ? (
                <BigLabel18
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 19 ? (
                <BigLabel19
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 20 ? (
                <BigLabel20
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 21 ? (
                <BigLabel21
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 22 ? (
                <BigLabel22
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 23 ? (
                <BigLabel23
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 24 ? (
                <BigLabel24
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 25 ? (
                <BigLabel25
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 26 ? (
                <BigLabel26
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 27 ? (
                <BigLabel27
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 28 ? (
                <BigLabel28
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel === 29 ? (
                <BigLabel29
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : (
                <BigLabel30
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderBox;
