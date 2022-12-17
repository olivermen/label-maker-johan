import React, { useState, useRef } from "react";
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

// import labels
import Steps from "../../../components/Steps";

// import images
import { BigLabel } from "../../../components/Label";
import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";

let index = 0;

const OrderBox: React.FC = () => {
  const G: any = myStore();
  const { update }: any = myStore();
  const navigate = useNavigate();

  const [price, setPrice] = useState(14);
  const [priceIndex, setPriceIndex] = useState(0);
  const printRef = React.useRef<HTMLDivElement>(null);

  const [check, setCheck] = useState("small");
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [items, setItems] = useState([
    "12 labels ($14)",
    "36 labels ($22)",
    "48 labels ($28)",
    "72 labels ($38)",
    "120 labels ($56)",
    "200 labels ($86)",
    "500 labels ($170)",
  ]);
  const arrPrice = [14, 22, 28, 38, 56, 86, 170];
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

  const toShippingPage = () => {
    update({ price: price, size: check });
    navigate("/shipping");
  };

  const handlePrice = (val: any) => {
    setPrice(arrPrice[val]);
    setPriceIndex(val);
  };

  return (
    <div className="orderbox">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div
              style={{
                background: "#89898940",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Steps />
            </div>
            <h1 className="gradient-h1">Order your bottle stickers</h1>
            <span className="h3">
              Your custom label design will be printed out as high quality
              waterproof stickers, cut to shape and shipped to you promptly, so
              you can make your jam look fantastic.
            </span>
            <Row style={{ marginTop: "20px" }}>
              <span className="h4">Side</span>
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
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 3px",
                    }}
                  >
                    Front
                  </p>
                  <Radio
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
                    Back
                  </p>
                </RadioGroup>
              </FormControl>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span className="h4">Number of labels</span>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Order Label Count"
                  onChange={(val) => {
                    handlePrice(val);
                  }}
                  value={priceIndex}
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider style={{ margin: "8px 0" }} />
                      <Space style={{ padding: "0 8px 4px" }}>
                        <Input
                          placeholder="Please enter item"
                          ref={inputRef}
                          value={name}
                          onChange={onNameChange}
                        />
                        <button
                          onClick={() => addItem}
                          style={{ border: "none", background: "transparent" }}
                        >
                          + Add item
                        </button>
                      </Space>
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

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span
                  className="h4"
                  style={{ color: "#646464", fontWeight: "100" }}
                >
                  Free worldwide shipping included.
                </span>
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span className="h4">Size</span>
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
                      Small (97.6 * 90mm)
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
                      Big (104 * 100mm)
                    </label>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col className="col-4">
                <button
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "900",
                    padding: "10px 25px",
                    color: "white",
                    backgroundColor: "#FEA150",
                    border: "none",
                    borderRadius: "50px",
                  }}
                  onClick={toShippingPage}
                >
                  Next
                </button>
              </Col>

              <Col className="col-4">
                or
                <Link to="/edit">
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      textDecoration: "underline",
                    }}
                  >
                    Back
                  </button>
                </Link>
              </Col>
              <Col className="col-4"></Col>
            </Row>
          </div>
          <div
            className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div ref={printRef} style={{ height: "380px" }}>
              {G.curLabel == 0 ? (
                <BigLabel
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  // file={file}
                />
              ) : G.curLabel == 1 ? (
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
              ) : G.curLabel == 2 ? (
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
              ) : (
                <BigLabel3
                  bottleName={G && G.bottleName}
                  vol={G && G.vol}
                  cl={G && G.cl}
                  tagLine={G && G.tagLine}
                  color={G && G.color}
                  batchDate={G && G.batchDate}
                  bottleType={G && G.bottleType}
                  file={G && G.file}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
