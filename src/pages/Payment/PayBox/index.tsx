import React, { useState, useEffect } from "react";
import { message } from "antd";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocal from "i18n-iso-countries/langs/it.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StripeCheckout, { Token } from "react-stripe-checkout";
import axios from "axios";
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";
// import stylesheets
import "./paybox.scss";

// import labels
import { Link } from "react-router-dom";
import Steps from "../../../components/Steps/Payment";

import { BigLabel } from "../../../components/Label";
import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";

import Stripe from "../../../assets/main/payment/Stripe.svg";
import Paypal from "../../../assets/main/payment/Paypal.svg";
import Crypto from "../../../assets/main/payment/Crypto.svg";

// import images
const appUrl = process.env.REACT_APP_API_URL || "";
const appMode = process.env.REACT_APP_MODE === "1";

declare module "react-stripe-checkout" {
  interface StripeCheckoutProps {
    children?: React.ReactNode;
  }
}

const PayBox: React.FC = () => {
  const G: any = myStore();
  const { update }: any = myStore();
  const navigate = useNavigate();
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);
  const [paymentId, setPaymentId] = useState<number>(2022);
  const [messageApi, contextHolder] = message.useMessage();

  const [price, setPrice]: any = useState("100");

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Erorr! Seomthing went wrong",
    });
  };

  const handleToken = async (token: Token) => {
    const data = { token };
    try {
      const result = await axios.post(`${appUrl}/checkout`, { data });
      if (result.data.status) {
        console.log(result);
        var now = new Date();
        update({ orderid: paymentId, created: now.toLocaleString() });
        navigate("/review");
      } else {
        error();
      }
    } catch (error) {
      if (appMode) console.log(error);
    }
  };

  useEffect(() => {
    setPrice(G && G.price);
    const min = 10000;
    const max = 999999;
    const rand = Math.round(Math.random() * (max - min) + min);
    setPaymentId(rand);
  }, []);

  return (
    <div className="paybox" style={{ zIndex: "50" }}>
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
            <h1 className="gradient-h1">Payment details</h1>
            <div
              style={{
                backgroundColor: "#53535330",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span className="h4">36 front labels</span>
                <span className="h4">$22</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span className="h4">Worldwide Shipping</span>
                <span className="h4">Free</span>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span className="h4">Total</span>
                <span className="h4">$22</span>
              </div>
            </div>
            <Row style={{ marginTop: "20px" }}>
              <span className="h4">Payment Method</span>
              <Col className="col-4">
                <img src={Stripe} width={100} height={100} alt="Stripe"></img>
              </Col>
              <Col className="col-4">
                <img src={Paypal} width={100} height={100} alt="Paypal"></img>
              </Col>

              <Col className="col-4">
                <img src={Crypto} width={100} height={100} alt="Crypto"></img>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Col className="col-5">
                {/* <Link
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
                > */}
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                  token={handleToken}
                  amount={price * 100}
                  currency="USD"
                  name={`You are paying $${price}`}
                >
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
                  >
                    Pay with {}
                  </button>
                </StripeCheckout>
                {/* </Link> */}
              </Col>
              <Col className="col-4">
                or
                <Link
                  to="/shipping"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "underline",
                    color: "black",
                  }}
                >
                  {" "}
                  Back{" "}
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
            <div style={{ height: "380px" }}>
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

export default PayBox;
