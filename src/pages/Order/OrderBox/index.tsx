import React, { useState, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Input, Select, DatePicker, Space } from "antd";
import type { InputRef } from "antd";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker, SliderPicker } from "react-color";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// import stylesheets
import "./orderbox.scss";

// import labels
import Label from "../../../components/Label";

// import images
import Img from "../../../assets/images/bg2.jpg";
import { Slider } from "@mui/material";

let index = 0;

const OrderBox: React.FC = () => {
  const [color, setColor] = useState("#000000");
  const [wineName, setWineName] = useState("WineName");
  const [vol, setVol] = useState("4.8");
  const [cl, setCl] = useState("33");
  const [tagLine, setTagLine] = useState("TagLine");
  const printRef = React.useRef<HTMLDivElement>(null);

  const [file, setFile] = useState(Img);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [items, setItems] = useState([
    "12 labels ($14)",
    "12 labels ($14)",
    "36 labels ($22)",
    "48 labels ($28)",
    "72 labels ($38)",
    "120 labels ($56)",
    "200 labels ($86)",
    "500 labels ($170)",
  ]);
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
  const updateWineName = (event: any) => {
    const text = event.target.value;
    if (text.length > 22) return;
    setWineName(text);
  };

  const updateVol = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      const text = event.target.value;
      setVol(text);
    }
  };

  const updateCl = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      const text = event.target.value;
      setCl(text);
    }
  };

  const updateTagLine = (event: any) => {
    const text = event.target.value;
    setTagLine(text);
  };

  const onColorChange = (color: any, event: any) => {
    const text = color.hex;
    setColor(text);
  };

  const handleChange = (e: any) => {
    const imageUrl: any = URL.createObjectURL(e.target.files[0]);
    setFile(imageUrl);
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "px", "a7");
    const imgProperties = pdf.getImageProperties(data);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  const setSide = () => {
    alert("side");
  };

  return (
    <div className="orderbox">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            className="col-xl-4 col-lg-12 ccol-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <h1 className="gradient-h1">Order your bottle stickers</h1>
            <h3>
              Your custom label design will be printed out as high quality
              waterproof stickers, cut to shape and shipped to you promptly, so
              you can make your jam look fantastic.
            </h3>
            <Row style={{ marginTop: "20px" }}>
              <h4>Side</h4>
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
                <h4>Number of labels</h4>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Order Label Count"
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
                  options={items.map((item) => ({ label: item, value: item }))}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <h4>Tag line</h4>
                <input
                  type="text"
                  onChange={updateTagLine}
                  value="Homemade in Aotearoa"
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-3">
                <h4>Alc/Vol</h4>
                <input type="text" value={vol} onChange={updateVol} />
              </Col>
              <Col className="col-3">
                <h4>Volume</h4>
                <input type="text" value={cl} onChange={updateCl} />
              </Col>
              <Col className="col-6">
                <h4>Batch date</h4>
                <DatePicker bordered={false} />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <h4 style={{ marginBottom: "15px" }}>Color</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CirclePicker
                  width="100%"
                  circleSize={14}
                  colors={[
                    "#f44336",
                    "#e91e63",
                    "#673ab7",
                    "#3f51b5",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#8bc34a",
                    "#cddc39",
                    "#ffeb3b",
                    "#ffc107",
                    "#ff9800",
                    "#ff5722",
                  ]}
                  onChange={onColorChange}
                />
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 5px",
                  }}
                >
                  <SettingsOutlinedIcon
                    sx={{ fontSize: "18px", color: "#354832" }}
                  />
                </button>
              </div>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col className="col-6">
                <button
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "900",
                    padding: "15px 25px",
                    color: "white",
                    backgroundColor: "#FEA150",
                    border: "none",
                    borderRadius: "50px",
                  }}
                >
                  Buy Stickers
                </button>
              </Col>

              <Col className="col-6"></Col>
            </Row>
          </div>
          {/* <div
            className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="bottle">
              <div style={{ width: "100%", height: "55%" }}></div>
              <div ref={printRef}>
                <Label
                  wineName={wineName}
                  vol={vol}
                  cl={cl}
                  tagLine={tagLine}
                  color={color}
                  file={file}
                />
              </div>
              <div className="overlay"></div>
            </div>
            <Button
              variant="contained"
              component="label"
              style={{ backgroundColor: "#ff3333" }}
            >
              Upload Image
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleChange}
              />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
