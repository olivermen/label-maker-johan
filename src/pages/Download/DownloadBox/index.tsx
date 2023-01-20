import React, { useEffect, useState } from "react";
import { message } from "antd";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocal from "i18n-iso-countries/langs/it.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";
// import stylesheets
import "./downloadbox.scss";
import axios from "axios";
import useStore from "../../../useStore";

// import labels
import Steps from "../../../components/Steps/Review";

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
import html2canvas from "html2canvas";

import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data";

const appUrl = "https://stripe-server-johan-production.up.railway.app"; // process.env.REACT_APP_API_URL || "";
declare module "react-stripe-checkout" {
  interface StripeCheckoutProps {
    children?: React.ReactNode;
  }
}

var sendPDF: any;

const DownloadBox: React.FC = () => {
  const { T } = useStore();
  const G: any = myStore();
  const printRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);
  const [messageApi, contextHolder] = message.useMessage();
  const [pdfToSend, setPdfToSend] = useState<any>(1);

  const [bottleName, setBottleName] = useState<any>("");
  const [bottleType, setBottleType] = useState<any>("");
  const [tagLine, setTagLine] = useState<any>("");
  const [alc, setAlc] = useState<any>("");
  const [vol, setVol] = useState<any>("");
  const [date, setDate] = useState<any>("");
  const [color, setColor] = useState<any>("");
  const [cur, setCur] = useState<any>(1);
  const [size, setSize] = useState<any>('small');

  const success = () => {
    messageApi.open({
      type: "success",
      content: "New order received",
      className: "custom-class",
      style: {
        marginTop: "8vh",
      },
    });
  };

  useEffect(() => {
    toast.success("New Label Order Received!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    const queryParameters = new URLSearchParams(window.location.search);
    const cur_param = Number(queryParameters.get("cur"));
    const name_param = queryParameters.get("name");
    const type_param = queryParameters.get("type");
    const tag_param = queryParameters.get("tag");
    const alc_param = queryParameters.get("acl");
    const vol_param = queryParameters.get("volumn");
    const date_param = queryParameters.get("date");
    const color_param = queryParameters.get("color");
    const size_param = queryParameters.get("size");
    setCur(cur_param);
    setBottleName(name_param);
    setBottleType(type_param);
    setTagLine(tag_param);
    setAlc(alc_param);
    setVol(vol_param);
    setDate(date_param);
    setSize(size_param);
    setColor("#" + color_param);
    setTimeout(() => {
      finish();
    }, 3000);
  }, []);

  const finish = () => {
    handleDownloadPdf();
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;

    let lwidth = 100; // mm
    let lheight = 104; // mm

    if (size === "small") {
      lwidth = 90;
      lheight = 97.6;
    }
    console.log(size);
    const pdf = new jsPDF("portrait", "mm", [lheight, lwidth]);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();
    if (cur !== 8) {
      html2canvas(element, {
        scale: 5,
      }).then(function (canvas) {
        var data = canvas.toDataURL();

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        // var blobPDF = new Blob([pdf.output("blob")], {
        //   type: "application/pdf",
        // });
        // setPdfToSend(blobPDF);

        pdf.save("label.pdf");
        setTimeout(() => {
          window.close();
        }, 3000);
      });
    } else {
      domtoimage
        .toJpeg(element)
        .then(function (dataUrl) {
          // pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.addImage(dataUrl, "PNG", 0, 0, 100, 100);
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
          pdf.save("label.pdf");
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  return (
    <div className="downloadbox">
      {contextHolder}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 download-box">
            <div ref={printRef} className="download-pdf">
              {cur === 0 ? (
                <SBigLabel1
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 1 ? (
                <BigLabel1
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 2 ? (
                <BigLabel2
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 3 ? (
                <BigLabel3
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 4 ? (
                <BigLabel4
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 5 ? (
                <BigLabel5
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 6 ? (
                <BigLabel6
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 7 ? (
                <BigLabel7
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 8 ? (
                <BigLabel8
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  file={G && G.file}
                />
              ) : cur === 9 ? (
                <BigLabel9
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 10 ? (
                <BigLabel10
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 11 ? (
                <BigLabel11
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 12 ? (
                <BigLabel12
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 13 ? (
                <BigLabel13
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 14 ? (
                <BigLabel14
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 15 ? (
                <BigLabel15
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 16 ? (
                <BigLabel16
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 17 ? (
                <BigLabel17
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 18 ? (
                <BigLabel18
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 19 ? (
                <BigLabel19
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 20 ? (
                <BigLabel20
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 21 ? (
                <BigLabel21
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 22 ? (
                <BigLabel22
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 23 ? (
                <BigLabel23
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 24 ? (
                <BigLabel24
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 25 ? (
                <BigLabel25
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 26 ? (
                <BigLabel26
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 27 ? (
                <BigLabel27
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 28 ? (
                <BigLabel28
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : cur === 29 ? (
                <BigLabel29
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              ) : (
                <BigLabel30
                  bottleName={bottleName}
                  vol={vol}
                  cl={alc}
                  tagLine={tagLine}
                  color={color}
                  batchDate={date}
                  bottleType={bottleType}
                  // file={file}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Downloading label pdf...</h1>
        </div>
      </div>
    </div>
  );
};

export default DownloadBox;
