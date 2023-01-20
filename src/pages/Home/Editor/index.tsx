import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker, BlockPicker } from "react-color";
// import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DatePicker } from "antd";
import Img from "../../../assets/images/img1.webp";

import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import stylesheets
import "./editor.scss";

// import labels
import SLabel1 from "../../../components/Label/SLabel1";

// import images
import myStore from "../../../useStore";

// import Img from "../../../assets/images/img1.webp";

import Label1 from "../../../components/Label/Label1";
import Label2 from "../../../components/Label/Label2";
import Label3 from "../../../components/Label/Label3";
import Label4 from "../../../components/Label/Label4";
import Label5 from "../../../components/Label/Label5";
import Label6 from "../../../components/Label/Label6";
import Label7 from "../../../components/Label/Label7";
import Label8 from "../../../components/Label/Label8";
import Label9 from "../../../components/Label/Label9";
import Label10 from "../../../components/Label/Label10";
import Label11 from "../../../components/Label/Label11";
import Label12 from "../../../components/Label/Label12";
import Label13 from "../../../components/Label/Label13";
import Label14 from "../../../components/Label/Label14";
import Label15 from "../../../components/Label/Label15";
import Label16 from "../../../components/Label/Label16";
import Label17 from "../../../components/Label/Label17";
import Label18 from "../../../components/Label/Label18";
import Label19 from "../../../components/Label/Label19";
import Label20 from "../../../components/Label/Label20";
import Label21 from "../../../components/Label/Label21";
import Label22 from "../../../components/Label/Label22";
import Label23 from "../../../components/Label/Label23";
import Label24 from "../../../components/Label/Label24";
import Label25 from "../../../components/Label/Label25";
import Label26 from "../../../components/Label/Label26";
import Label27 from "../../../components/Label/Label27";
import Label28 from "../../../components/Label/Label28";
import Label29 from "../../../components/Label/Label29";
import Label30 from "../../../components/Label/Label30";

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

import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import axios from "axios";

import { Helmet } from "react-helmet";

const appUrl = "https://stripe-server-johan-production.up.railway.app"; // process.env.REACT_APP_API_URL || ""; "http://localhost:8080";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const G: any = myStore();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    
    <Dialog onClose={handleClose} open={open}>
      <div className="height-380">
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
    </Dialog>
  );
}

const Editor = () => {
  const [open, setOpen] = React.useState(false);

  const { T, update }: any = myStore();
  const G: any = myStore();
  const navigate = useNavigate();
  const [color, setColor] = useState("#111e0a");
  const [bottleName, setBottleName] = useState("");
  const [bottleType, setBottleType] = useState("");
  const [vol, setVol] = useState("");
  const [cl, setCl] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [batchDate, setBatchDate] = useState<string>("2022-12-12");
  const printRef = React.useRef<HTMLDivElement>(null);
  const [file, setFile] = useState(Img);
  const [popularColors, setPopularColors] = useState([
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
  ]);

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [zoom, setZoom] = React.useState(false);
  const [vat, setVAT] = useState(0.0);
  const [rate, setRate] = useState(0.2);
  const [price, setPrice]: any = useState(100.0);

  const blackLabels = [14, 20, 23];

  useEffect(() => {
    setColor(G && G.color);
    setBottleName(G && G.bottleName);
    setBottleType(G && G.bottleType);
    setVol(G && G.vol);
    setCl(G && G.cl);
    setTagLine(G && G.tagLine);
    setBatchDate(G && G.batchDate);

    if (G.file !== "") {
      setFile(G && G.file);
    }
    getTaxRates(G.country_code);
    if (G.lang == "sw-SW") update({ currency: "SEK" });
    else update({ currency: "EUR" });

    const chat_lang = G.lang == "en-US" ? "en" : G.lang == "sw-SW" ? "sv" : "es";
    const script = document.createElement("script");
    
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `CRISP_RUNTIME_CONFIG = {locale : '${chat_lang}'}; window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ea46d69f-d028-44ab-ad10-ce0ded68092b";
    (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();`;

    document.body.appendChild(script);
  }, []);

  const getTaxRates = async (country_code: string) => {
    const data = {
      country_code: country_code,
    };
    try {
      const result = await axios.post(`${appUrl}/taxrates`, { data });
      if (result.data) {
        setRate(result.data.rate);
        update({ vat: result.data.rate });
      } else {
      }
    } catch (error) {}
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const zoomIn = () => {
    handleClickOpen();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
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
    if (text.length > 32) return;
    setBottleName(text);
    update({
      bottleName: text,
    });
  };

  const updateBottleType = (event: any) => {
    const text = event.target.value;
    if (text.length > 32) return;
    setBottleType(text);
    update({
      bottleType: text,
    });
  };
  const updateVol = (event: any) => {
    const re = /^[0-9\b]+$/; // re.test(event.target.value)

    if (event.target.value.length <= 5) {
      const text = event.target.value;
      setVol(text);
      update({
        vol: text,
      });
    }
  };

  const updateCl = (event: any) => {
    const re = /^[0-9\b]+$/; // || re.test(event.target.value)
    if (event.target.value.length <= 5) {
      const text = event.target.value;
      setCl(text);
      update({
        cl: text,
      });
    }
  };

  const updateTagLine = (event: any) => {
    const text = event.target.value;
    if (text.length > 64) return;
    setTagLine(text);
    update({
      tagLine: text,
    });
  };

  const onColorChange = (color: any, event: any) => {
    const text = color.hex;
    setColor(text);
    update({
      color: text,
    });
  };

  const setNewColor = (color: any) => {
    const text = color;
    setColor(text);
    update({
      color: text,
    });
    var tmpArr = popularColors;
    // tmpArr.push(text);
    // setPopularColors(tmpArr);
  };

  const handleChange = (e: any) => {
    const imageUrl: any = URL.createObjectURL(e.target.files[0]);
    setFile(imageUrl);
    update({ file: imageUrl, curImageX: 0, curImageY: 0 });
  };

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
    if (G.lang === "en-US") 
    { 
      navigate("/en/order");
    }
    if (G.lang === "sw-SW") {
      navigate("/sv/order");
    }
    if (G.lang === "es-ES") {
      navigate("/es/order");
    }
  };

  const setDate = (e: any) => {
    setBatchDate(String(e));
    update({
      batchDate: String(e),
    });
  };

  const leftLabel = () => {
    let tmp = G && G.curLabel;
    tmp -= 1;
    if (tmp === 0) tmp = 30;
    if (blackLabels.includes(tmp)) tmp--;
    update({
      curLabel: tmp,
    });
  };
  const rightLabel = () => {
    let tmp = G && G.curLabel;
    tmp += 1;
    if (tmp === 31) tmp = 1;
    if (blackLabels.includes(tmp)) tmp++;
    update({
      curLabel: tmp,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {T("title.edit")}
        </title>
        <meta name="title" content={T("title.edit")} />
        <meta
          name="description"
          content={T("description.edit")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
    <div className="editor">
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 edit-div">
            <h1 className="gradient-h1">{T("home.header")}</h1>
            <h2>{T("home.content")}</h2>
            <Row className="row-mt-20">
              <h3>{T("home.side")}</h3>
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
                  <p className="edit-text">{T("home.front")}</p>
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
              <Col className="col-6">
                <h3>{T("home.bottlename")}</h3>
                <input
                  type="text"
                  onChange={updateBottleName}
                  value={bottleName}
                />
              </Col>
              <Col className="col-6">
                <h3>{T("home.bottletype")}</h3>
                <input
                  type="text"
                  name="site_name"
                  value={bottleType}
                  onChange={updateBottleType}
                />
              </Col>
            </Row>

            <Row className="row-mt-20">
              <Col className="col-12">
                <h3>{T("home.tagline")}</h3>
                <input type="text" onChange={updateTagLine} value={tagLine} />
              </Col>
            </Row>

            <Row className="row-mt-20">
              <Col className="col-3">
                <h3>{T("home.acl")}</h3>
                <input type="text" value={vol} onChange={updateVol} />
              </Col>
              <Col className="col-3">
                <h3>{T("home.vol")}</h3>
                <input type="text" value={cl} onChange={updateCl} />
              </Col>
              <Col className="col-6">
                <h3>{T("home.date")}</h3>
                <DatePicker
                  bordered={false}
                  onChange={(e) => setDate(String(e?.format("YYYY/MM/DD")))}
                />
              </Col>
            </Row>

            <Row className="row-mt-20">
              <h3>{T("home.color")}</h3>
              <div className="color-box">
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
                <button className="color-picker-btn">
                  {/* <SettingsOutlinedIcon
                    sx={{ fontSize: "18px", color: "#354832" }}
                  ></SettingsOutlinedIcon> */}
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setNewColor(e.target.value)}
                    className="color-picker-input"
                  ></input>{" "}
                </button>
              </div>
            </Row>
            <Row>
              <Col className="col-6">
                <button className="buy-sticker-btn" onClick={toOrderPage}>
                  {T("home.button")}
                </button>
              </Col>

              <Col className="col-6"></Col>
            </Row>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12 edit-left">
            <div className="col-4 edit-1">
              <div className="height-60"></div>
              <button className="left-arrow-btn" onClick={leftLabel}>
                <WestIcon />
              </button>
            </div>
            <div className="col-4 bottle-div">
              <div className="bottle">
                <div className="height-55">
                  <button className="zoom-btn" onClick={zoomIn}>
                    <ZoomInIcon />
                  </button>
                </div>
                <div ref={printRef} className="height-150">
                  {G.curLabel === 0 ? (
                    <SLabel1
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
                  ) : G.curLabel === 3 ? (
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
                  ) : G.curLabel === 4 ? (
                    <Label4
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 5 ? (
                    <Label5
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 6 ? (
                    <Label6
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 7 ? (
                    <Label7
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 8 ? (
                    <Label8
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 9 ? (
                    <Label9
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 10 ? (
                    <Label10
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 11 ? (
                    <Label11
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 12 ? (
                    <Label12
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 13 ? (
                    <Label13
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 14 ? (
                    <Label14
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 15 ? (
                    <Label15
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 16 ? (
                    <Label16
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 17 ? (
                    <Label17
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 18 ? (
                    <Label18
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 19 ? (
                    <Label19
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 20 ? (
                    <Label20
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 21 ? (
                    <Label21
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 22 ? (
                    <Label22
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 23 ? (
                    <Label23
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 24 ? (
                    <Label24
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 25 ? (
                    <Label25
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 26 ? (
                    <Label26
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 27 ? (
                    <Label27
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 28 ? (
                    <Label28
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 29 ? (
                    <Label29
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : (
                    <Label30
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
              {G.curLabel === 31 && (
                <Button
                  variant="contained"
                  component="label"
                  className="upload-btn"
                >
                  {T("home.upload")}
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                  />
                </Button>
              )}
            </div>
            <div className="col-4 edit-right">
              <div className="height-60"></div>

              <button className="right-arrow-btn" onClick={rightLabel}>
                <EastIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Editor;
