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

import Stripe from "../../../assets/main/payment/Stripe.svg";
import Klarna from "../../../assets/main/payment/Klarna.svg";
import Paypal from "../../../assets/main/payment/Paypal.svg";
import Crypto from "../../../assets/main/payment/Crypto.svg";

import SalesTax from "sales-tax";
import { setEnvironmentData } from "worker_threads";
import { Helmet } from "react-helmet";

// import images
const appUrl = "https://stripe-server-johan-production.up.railway.app"; // process.env.REACT_APP_API_URL || ""; ;

declare module "react-stripe-checkout" {
  interface StripeCheckoutProps {
    children?: React.ReactNode;
  }
}
const PayBox: React.FC = () => {
  const G: any = myStore();
  const { T, update }: any = myStore();
  const navigate = useNavigate();
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);
  const [paymentId, setPaymentId] = useState<number>(2022);
  const [messageApi, contextHolder] = message.useMessage();
  const [vat, setVAT] = useState(0.0);
  const [rate, setRate] = useState(0.2);
  const [currency, setCurrency] = useState("eur");

  const [price, setPrice]: any = useState(100.0);

  const [paperPrice1, setPaperPrice1] = useState("7.0");
  const [paperPrice2, setPaperPrice2] = useState("7.0");
  const [paperPrice3, setPaperPrice3] = useState("7.0");
  const [lang, setLang] = useState("/en");

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Erorr! Seomthing went wrong",
    });
  };

  const handleToken = async (token: Token) => {
    var currency_value = "EUR";
    if (G.lang == "sw-SW") currency_value = "SEK";
    const data = {
      token: token,
      otherInfo: {
        amount: price,
        currency: currency_value,
        country_code: G.country_code,
      },
    };
    try {
      const result = await axios.post(`${appUrl}/checkout`, { data });
      if (result.data.status) {
        var now = new Date();
        update({ orderid: paymentId, created: now.toLocaleString() });
        if (G.lang === "en-US") 
        { 
          navigate("/en/review");
        }
        if (G.lang === "sw-SW") {
          navigate("/sv/review");
        }
        if (G.lang === "es-ES") {
          navigate("/es/review");
        }
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    const min = 10000;
    const max = 999999;
    const rand = Math.round(Math.random() * (max - min) + min);
    setPaymentId(rand);
    getTaxRates(G.country_code);

    if (G.lang == "sw-SW") setCurrency("kr");
    
    if(G.lang == "en-US") setLang("/en");
    else if(G.lang == "sw-SW") setLang("/sv");
    else setLang("/es");
  }, []);
  useEffect(() => {
    var now = new Date();
    update({ orderid: paymentId, created: now.toLocaleString() });
  }, [paymentId]);

  const getTaxRates = async (country_code: string) => {
    const data = {
      country_code: country_code,
    };
    try {
      const result = await axios.post(`${appUrl}/taxrates`, { data });
      if (result.data) {
        setRate(result.data.rate);

        const p = Number(G.price * 100 + G.price * 100 * result.data.rate);
        const vat = Number(G.price * 100 * result.data.rate);
        const t = p / 100;
        update({ paid: t });
        setVAT(vat);
        setPrice(p);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    var price1 = String(G.price * (currency == "kr" ? 10 : 1));
    var price2 = String(
      Number((vat / 100) * (currency == "kr" ? 10 : 1)).toFixed(2)
    );
    var price3 = String(
      Number((price / 100) * (currency == "kr" ? 10 : 1)).toFixed(2)
    );
    setPaperPrice1(price1.replace(".", ","));
    setPaperPrice2(price2.replace(".", ","));
    setPaperPrice3(price3.replace(".", ","));
  }, [vat]);

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
    <div className="paybox">
      {contextHolder}

      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 pay-div">
            <div className="step-div">
              <Steps />
            </div>
            <h1 className="gradient-h1">{T("payment.header")}</h1>
            <div className="recipe-div">
              <div className="paper-div">
                <h2>
                  {G.count} {T("payment.frontlabels")}
                </h2>
                <h2>
                  {paperPrice1} {currency}
                </h2>
              </div>

              <div className="paper-div">
                <h2>{T("payment.worldwideshipping")}</h2>
                <h2>{T("payment.free")}</h2>
              </div>

              <div className="paper-div">
                <h2>{T("payment.tax")}</h2>
                <h2>
                  {paperPrice2} {currency}
                </h2>
              </div>
              <div className="paybox-div">
                <h2>{T("payment.total")}</h2>
                <h2>
                  {paperPrice3} {currency}
                </h2>
              </div>
            </div>
            <Row className="row-mt-20">
              
              {/* <Col className="col-4">
                <img src={Paypal} width={100} height={100} alt="Paypal"></img>
              </Col>

              <Col className="col-4">
                <img src={Crypto} width={100} height={100} alt="Crypto"></img>
              </Col> */}
            </Row>
            <Row className="row-mt-50">
              {/* <Col className="col-4">
                
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                  token={handleToken}
                  amount={price * (currency == "kr" ? 10 : 1)}
                  currency={currency == "kr" ? "SEK" : "EUR"}
                  name={`You are paying ${
                    (price / 100) * (currency == "kr" ? 10 : 1)
                  }${currency}`}
                >
                  <button className="pay-btn">
                    {T("payment.paywith")} {}
                  </button>
                </StripeCheckout>
              </Col> */}

              <Col className="col-4">
                <form
                  action={`${appUrl}/klarna_checkout?currency=${
                    currency == "kr" ? "SEK" : "EUR"
                  }&price=${price * (currency == "kr" ? 10 : 1)}&lang=${lang.replace('/','')}&orderid=${paymentId}`}
                  method="POST"
                >
                  <button className="pay-btn">{T("payment.paywith")}</button>
                </form>
              </Col>
              <Col className="col-4">
                or
                <Link to={lang + "/shipping"} className="back-link">
                  {" "}
                  {T("order.back")}{" "}
                </Link>
              </Col>
              <Col className="col-4"></Col>
            </Row>
          </div>

          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 pay-bottle-div">
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
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PayBox;
