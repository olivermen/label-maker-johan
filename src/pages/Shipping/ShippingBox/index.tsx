import React, { useEffect, useState } from "react";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocal from "i18n-iso-countries/langs/it.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";

// import stylesheets
import "./shippingbox.scss";

import { Link } from "react-router-dom";
// import labels
import Steps from "../../../components/Steps/Shipping";

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
import { Select, MenuItem } from "@material-ui/core";
import { getCode, getName } from "country-list";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SalesTax from "sales-tax";

import { Helmet } from "react-helmet";


const ShippingBox: React.FC = () => {
  const G: any = myStore();
  const { T, update }: any = myStore();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const notify = () => toast("Please input all fields correctly!");
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);

  const countryObj = countries.getNames("en", { select: "official" });
  const [lang, setLang] = useState("/en");

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const selectCountryHandler = (e: any) => {
    setSelectedCountry(e.target.value);
  };
  const handleFirstNameChange = (e: any) => {
    setFirstname(e.target.value);
    setUsername(e.target.value + " " + lastname);
  };
  const handleLastNameChange = (e: any) => {
    setLastname(e.target.value);
    setUsername(firstname + " " + e.target.value);
  };
  const handleUserEmailChange = (e: any) => {
    setUseremail(e.target.value);
  };
  const handleUserPhoneChange = (e: any) => {
    setUserphone(e.target.value);
  };
  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };
  // const handleStateChange = (e: any) => {
  //   setState(e.target.value);
  // };
  const handleZipcodeChange = (e: any) => {
    setZipcode(e.target.value);
  };
  const handleStreetChange = (e: any) => {
    setStreet(e.target.value);
  };

  const toPaymentPage = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      useremail === "" ||
      userphone === "" ||
      city === "" ||
      zipcode === "" ||
      street === "" ||
      selectedCountry === ""
    ) {
      toast.error("Please input all fields correctly!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    update({
      firstname: firstname,
      lastname: lastname,
      email: useremail,
      phone: userphone,
      city: city,
      zipcode: zipcode,
      street: street,
      country_code: selectedCountry,
      country: getName(selectedCountry),
    });
    if (G.lang === "en-US") 
    { 
      navigate("/en/payment");
    }
    if (G.lang === "sw-SW") {
      navigate("/sv/payment");
    }
    if (G.lang === "es-ES") {
      navigate("/es/payment");
    }
  };

  useEffect(() => {
    setUsername(G && G.name);
    setFirstname(G && G.firstname);
    setLastname(G && G.lastname);
    setUseremail(G && G.email);
    setUserphone(G && G.phone);
    setSelectedCountry(G && G.country_code);
    setCity(G && G.city);
    setState(G && G.state);
    setStreet(G && G.street);
    setZipcode(G && G.zipcode);
    
    if(G.lang == "en-US") setLang("/en");
    else if(G.lang == "sw-SW") setLang("/sv");
    else setLang("/es");
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {T("title.about")}
        </title>
        <meta name="title" content={T("title.about")} />
        <meta
          name="description"
          content={T("description.about")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
    
    <div className="shippingbox">
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
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 shipping-box">
            <div className="step-div">
              <Steps />
            </div>
            <h1 className="gradient-h1">{T("shipping.header")}</h1>
            <h2>{T("shipping.content")}</h2>
            <Row className="mt-20">
              <h3>{T("shipping.personalinfo")}</h3>

              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => handleFirstNameChange(e)}
                className="first-name"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => handleLastNameChange(e)}
                className="last-name"
              ></input>
              <input
                type="email"
                placeholder="Email"
                value={useremail}
                onChange={(e) => handleUserEmailChange(e)}
                className="customer-email"
              ></input>
              <input
                type="phone"
                placeholder="Phone"
                value={userphone}
                onChange={(e) => handleUserPhoneChange(e)}
                className="customer-phone"
              ></input>
            </Row>
            <Row className="mt-20">
              <Col className="col-12">
                <h3>{T("shipping.street")}</h3>
                <input
                  type="text"
                  value={street}
                  placeholder="Street"
                  onChange={(e) => handleStreetChange(e)}
                ></input>
              </Col>
            </Row>
            <Row className="mt-20">
              <Col className="col-7">
                <h3>{T("shipping.city")}</h3>
                <input
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => handleCityChange(e)}
                ></input>
              </Col>
              <Col className="col-5">
                <span className="">{T("shipping.zipcode")}</span>
                <input
                  type="text"
                  value={zipcode}
                  placeholder="Zipcode"
                  onChange={(e) => handleZipcodeChange(e)}
                ></input>
              </Col>
            </Row>

            <Row className="mt-20">
              <Col className="col-12">
                <h3>{T("shipping.country")}</h3>
                <Select
                  value={selectedCountry}
                  onChange={selectCountryHandler}
                  className="select-country"
                >
                  {!!countryArr?.length &&
                    countryArr.map(({ label, value }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                </Select>
              </Col>
            </Row>
            <Row className="mt-50">
              <Col className="col-4">
                <button className="shipping-btn" onClick={toPaymentPage}>
                  {T("order.next")}
                </button>
              </Col>
              <Col className="col-4">
                or
                <Link to={lang + "/order"} className="back-link">
                  {" "}
                  {T("order.back")}{" "}
                </Link>
              </Col>
              <Col className="col-4"></Col>
            </Row>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 shipping-right-div">
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

export default ShippingBox;
