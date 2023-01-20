import React, { useEffect, useState } from "react";
import { message } from "antd";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocal from "i18n-iso-countries/langs/it.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
// import stylesheets
import "./reviewbox.scss";
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

import FormData from "form-data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const appUrl = "https://stripe-server-johan-production.up.railway.app"; // process.env.REACT_APP_API_URL || "";
declare module "react-stripe-checkout" {
  interface StripeCheckoutProps {
    children?: React.ReactNode;
  }
}

var sendPDF: any;

const ReviewBox: React.FC = () => {
  const { T } = useStore();
  const G: any = useStore();
  const printRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);
  const [messageApi, contextHolder] = message.useMessage();
  const [pdfToSend, setPdfToSend] = useState<any>(1);
  const notify = () => toast("You paid successfuly paid!");

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Your are successfully paid",
      className: "custom-class",
      style: {
        marginTop: "8vh",
      },
    });
  };

  // const error = () => {
  //   messageApi.open({
  //     type: "error",
  //     content: "Erorr! Seomthing went wrong",
  //   });
  // };

  useEffect(() => {
    toast.success(" You paid successfuly! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

  const finish = () => {
    handleDownloadPdf();
    sendEmail();

    if (G.lang === "en-US") 
    { 
      navigate("/en/confirmation");
    }
    if (G.lang === "sw-SW") {
      navigate("/sv/confirmation");
    }
    if (G.lang === "es-ES") {
      navigate("/es/confirmation");
    }
  };

  const replaceSpace = (str: string) => {
    var tmp = str.replace("#", "");
    return tmp.replace(" ", "%20");
  };

  const sendEmail = async () => {
    const info = {
      order_id: G.orderid,
      order_date: G.created,
      order_name: G.firstname + " " + G.lastname,
      order_email: G.email,
      order_country: G.country,
      order_city: G.city,
      order_street: G.street,
      order_zipcode: G.zipcode,
      order_amount: G.price,
      order_count: G.count,
      order_label: G.curLabel,
      order_size: G.size,
    };
    const data = {
      email: "order@fixalabel.com",
      // email1: "johan@fixalabel.com",
      // email2: "erik@fixalabel.com",
      subject: `New Order ${G && G.orderid}`,
      info: info,
      html: `https://fixalabel.com/download?cur=${
        G && G.curLabel
      }&name=${replaceSpace(G && G.bottleName)}&type=${replaceSpace(
        G && G.bottleType
      )}&tag=${replaceSpace(G && G.tagLine)}&acl=${replaceSpace(
        G && G.cl
      )}&volumn=${replaceSpace(G && G.vol)}&date=${replaceSpace(
        G && G.batchDate
      )}&color=${replaceSpace(G && G.color)}&size=${G.size}`,
    };
    try {
      const result = await axios.post(`${appUrl}/send-email`, data);
    } catch (error) {}
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;

    let lwidth = 104; // mm
    let lheight = 100; // mm

    if (G.size === "small") {
      lwidth = 97.6;
      lheight = 90;
    }
    const pdf = new jsPDF("portrait", "mm", [lheight, lwidth]);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();
    if (G.curLabel !== 8) {
      html2canvas(element, {
        scale: 5,
      }).then(function (canvas) {
        var data = canvas.toDataURL();

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("label.pdf");
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
    <div className="reviewbox">
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
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 review-row">
            <div className="step-div">
              <Steps />
            </div>
            <h1 className="gradient-h1">
              {T("review.header")} # {G && G.orderid}
            </h1>
            <h2>
              {T("review.header2")} <br />
              <br />
              {T("review.header3")}
            </h2>
            <Row className="row-mt-30">
              <Col className="col-6">
                <button className="btn-review" onClick={finish}>
                  {T("review.finish")}
                </button>
              </Col>
            </Row>

            <div className="row recipe-paper">
              <div className="col-5 left-paper">
                <h3 className="recipe-text mt-10">{T("review.orderid")}</h3>
                <h3 className="recipe-text">{T("review.orderstatus")}</h3>
                <h3 className="recipe-text">{T("review.created")}</h3>
                <h3 className="recipe-text">{T("review.name")}</h3>
                <h3 className="recipe-text">{T("review.email")}</h3>
                <h3 className="recipe-text">{T("review.shippingaddress")}</h3>
                <h3 className="recipe-text">{T("review.amountpaid")}</h3>
                {/* <h3 className="recipe-text">{T("review.paymentmethod")}</h3> */}
                <h3 className="recipe-text">{T("review.dimensions")}</h3>
              </div>

              <div className="col-7 right-paper">
                <h3 className="recipe-right-text mt-10">{G && G.orderid}</h3>
                <h3 className="recipe-right-text">{T("review.new")}</h3>
                <h3 className="recipe-right-text">{G && G.created}</h3>
                <h3 className="recipe-right-text">
                  {G && G.firstname} {G && G.lastname}
                </h3>
                <h3 className="recipe-right-text">{G && G.email}</h3>
                <h3 className="recipe-right-text">
                  {G && G.country} {G && G.state} {G && G.city}
                </h3>
                <h3 className="recipe-right-text">{G && G.paid} $</h3>
                {/* <h3 className="recipe-right-text">{G && G.payment}</h3> */}
                <h3 className="recipe-right-text">
                  {G.size === "small" ? "97.6 * 90mm" : "104mm * 100mm"}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 review-right-div">
            <div className="review-print" ref={printRef}>
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
  );
};

export default ReviewBox;
