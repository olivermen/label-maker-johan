import React, { useEffect } from "react";
import { message } from "antd";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocal from "i18n-iso-countries/langs/it.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";
// import stylesheets
import "./reviewbox.scss";

// import labels
import Steps from "../../../components/Steps/Review";

import { BigLabel } from "../../../components/Label";
import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

declare module "react-stripe-checkout" {
  interface StripeCheckoutProps {
    children?: React.ReactNode;
  }
}

const ReviewBox: React.FC = () => {
  const G: any = myStore();
  const printRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);
  const [messageApi, contextHolder] = message.useMessage();

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
    success();
  }, []);

  const finish = () => {
    handleDownloadPdf();
    navigate("/");
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    let lwidth = 104; // mm
    let lheight = 100; // mm

    if (G.size === "small") {
      lwidth = 97.6;
      lheight = 90;
    }

    const pdf = new jsPDF("portrait", "mm", [lwidth, lheight]);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  return (
    <div className="reviewbox" style={{ zIndex: "50" }}>
      {contextHolder}
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
            <h1 className="gradient-h1">Order # {G && G.orderid}</h1>
            <span className="h2">
              Please review the order details to ensure they are correct.
              <br />
              <br />
              If you need to make any changes, please cancel this order.
              Cancelling this order will refund your payment.
            </span>
            <Row
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Col className="col-6">
                <button
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "900",
                    padding: "10px 10px",
                    color: "white",
                    backgroundColor: "#FEA150",
                    border: "none",
                    borderRadius: "50px",
                  }}
                  onClick={finish}
                >
                  Finish
                </button>
              </Col>
            </Row>

            <div
              style={{
                backgroundColor: "#53535330",
                padding: "10px 20px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
              className="row"
            >
              <div
                className="col-5"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "15px" }}
                >
                  Order ID
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Order Status
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Created
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Name
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Email
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Shipping Address
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Amount (paid)
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Payment Method
                </span>
                <span
                  className="h4"
                  style={{ color: "#FEA150", marginTop: "5px" }}
                >
                  Dimensions
                </span>
              </div>

              <div
                className="col-7"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="h4" style={{ marginTop: "15px" }}>
                  {G && G.orderid}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  New
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.created}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.name}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.email}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.country} {G && G.state} {G && G.city}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.price} $
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G && G.payment}
                </span>
                <span className="h4" style={{ marginTop: "5px" }}>
                  {G.size === "small" ? "97.6 * 90mm" : "104mm * 100mm"}
                </span>
              </div>
            </div>
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
              {G.curLabel === 0 ? (
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

export default ReviewBox;
