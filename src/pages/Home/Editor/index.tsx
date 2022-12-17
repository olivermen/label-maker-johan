import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker } from "react-color";
// import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DatePicker } from "antd";

import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
// import stylesheets
import "./editor.scss";

// import labels
import Label from "../../../components/Label";
import Label1 from "../../../components/Label/Label1";
import Label2 from "../../../components/Label/Label2";
import Label3 from "../../../components/Label/Label3";

// import images
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";

import Img from "../../../assets/images/bg2.jpg";

const Editor = () => {
  const { update }: any = myStore();
  const G: any = myStore();
  const navigate = useNavigate();
  const [color, setColor] = useState("#111e0a");
  const [bottleName, setBottleName] = useState("Sarah");
  const [bottleType, setBottleType] = useState("100% Natural");
  const [vol, setVol] = useState("4.8");
  const [cl, setCl] = useState("33");
  const [tagLine, setTagLine] = useState("Healthy");
  const [batchDate, setBatchDate] = useState<string>("2022-12-12");
  const printRef = React.useRef<HTMLDivElement>(null);
  const [file, setFile] = useState(Img);

  // const [file, setFile] = useState(Img);
  const [selectedValue, setSelectedValue] = React.useState("a");

  useEffect(() => {
    setColor(G && G.color);
    setBottleName(G && G.bottleName);
    setBottleType(G && G.bottleType);
    setVol(G && G.vol);
    setCl(G && G.cl);
    setTagLine(G && G.tagLine);
    setBatchDate(G && G.batchDate);
  }, []);

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
  const updateBottleName = (event: any) => {
    const text = event.target.value;
    if (text.length > 7 || text.length === 0) return;
    setBottleName(text);
  };

  const updateBottleType = (event: any) => {
    const text = event.target.value;
    if (text.length > 12 || text.length === 0) return;
    setBottleType(text);
  };
  const updateVol = (event: any) => {
    const re = /^[0-9\b]+$/;

    if (
      event.target.value === "" ||
      (re.test(event.target.value) && event.target.value.length <= 2)
    ) {
      const text = event.target.value;
      setVol(text);
    }
  };

  const updateCl = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (
      (event.target.value === "" || re.test(event.target.value)) &&
      event.target.value.length <= 3
    ) {
      const text = event.target.value;
      setCl(text);
    }
  };

  const updateTagLine = (event: any) => {
    const text = event.target.value;
    if (text.length > 7 || text.length === 0) return;
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

  // const handleDownloadPdf = async () => {
  //   const element: any = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("portrait", "mm", [104, 100]);
  //   const imgProperties = pdf.getImageProperties(data);

  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   const pdfHeight = pdf.internal.pageSize.getHeight();

  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("label.pdf");
  // };

  const toOrderPage = () => {
    update({
      bottleName: bottleName,
      bottleType: bottleType,
      cl: cl,
      vol: vol,
      tagLine: tagLine,
      batchDate: batchDate,
      color: color,
      file: file,
    });
    navigate("/order");
  };

  const leftLabel = () => {
    let tmp = G && G.curLabel;
    tmp -= 1;
    if (tmp == -1) tmp = 3;
    update({
      curLabel: tmp,
    });
  };
  const rightLabel = () => {
    let tmp = G && G.curLabel;
    tmp += 1;
    if (tmp == 4) tmp = 0;
    update({
      curLabel: tmp,
    });
  };

  return (
    <div className="editor">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <h1 className="gradient-h1">Create your own wine labels</h1>
            <span className="h2">
              Add the details about your beer and a custom label will be created
              for you. Use the arrows beside the bottle to try out different
              designs or browse all our designs.
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
              <Col className="col-6">
                <span className="h4">Bottle name</span>
                <input
                  type="text"
                  onChange={updateBottleName}
                  value={bottleName}
                />
              </Col>
              <Col className="col-6">
                <span className="h4">Bottle type</span>
                <input
                  type="text"
                  name="site_name"
                  value={bottleType}
                  onChange={updateBottleType}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span className="h4">Tag line</span>
                <input type="text" onChange={updateTagLine} value={tagLine} />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-3">
                <span className="h4">Alc/Vol</span>
                <input type="text" value={vol} onChange={updateVol} />
              </Col>
              <Col className="col-3">
                <span className="h4">Volume</span>
                <input type="text" value={cl} onChange={updateCl} />
              </Col>
              <Col className="col-6">
                <span className="h4">Batch date</span>
                <DatePicker
                  bordered={false}
                  onChange={(e) =>
                    setBatchDate(String(e?.format("YYYY/MM/DD")))
                  }
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <span className="h4" style={{ marginBottom: "15px" }}>
                Color
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // background: "#000000",
                  borderRadius: "10px",
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
                    "#232323",
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
                marginTop: "40px",
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
                    textDecoration: "none",
                  }}
                  onClick={toOrderPage}
                >
                  Buy Stickers
                </button>
              </Col>

              <Col className="col-6"></Col>
            </Row>
          </div>
          <div
            className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div
              className="col-4"
              style={{ height: "100%", textAlign: "right" }}
            >
              <div style={{ width: "100%", height: "60%" }}></div>

              <button
                style={{
                  borderRadius: "30px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFFFFF",
                  color: "#FEA150",
                  borderColor: "#FEA150",
                  border: "2px",
                  boxShadow: "0 0 0 5px #55555550",
                }}
                onClick={leftLabel}
              >
                <WestIcon />
              </button>
            </div>
            <div className="col-4 bottle-div">
              <div className="bottle">
                <div style={{ width: "100%", height: "55%" }}></div>
                <div ref={printRef} style={{ height: "150px" }}>
                  {G.curLabel === 0 ? (
                    <Label
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : G.curLabel === 1 ? (
                    <Label1
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : G.curLabel === 2 ? (
                    <Label2
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : (
                    <Label3
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  )}
                </div>
                <div className="overlay"></div>
              </div>
              {G.curLabel === 3 && (
                <Button
                  variant="contained"
                  component="label"
                  style={{ backgroundColor: "#ff3333", marginTop: "10px" }}
                >
                  Upload Image
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                  />
                </Button>
              )}
            </div>
            <div
              className="col-4"
              style={{ height: "100%", textAlign: "left" }}
            >
              <div style={{ width: "100%", height: "60%" }}></div>

              <button
                style={{
                  borderRadius: "30px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFFFFF",
                  color: "#FEA150",
                  borderColor: "#FEA150",
                  border: "2px",
                  boxShadow: "0 0 0 5px #55555550",
                }}
                onClick={rightLabel}
              >
                <EastIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
