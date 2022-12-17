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

// import images
import { BigLabel } from "../../../components/Label";
import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";
import { Select, MenuItem } from "@material-ui/core";

const ShippingBox: React.FC = () => {
  const G: any = myStore();
  const { update }: any = myStore();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");

  const selectCountryHandler = (e: any) => {
    setSelectedCountry(e.target.value);
  };

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocal);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const handleUserNameChange = (e: any) => {
    setUsername(e.target.value);
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
  const handleStateChange = (e: any) => {
    setState(e.target.value);
  };
  const handleZipcodeChange = (e: any) => {
    setZipcode(e.target.value);
  };
  const handleStreetChange = (e: any) => {
    setStreet(e.target.value);
  };

  const toPaymentPage = () => {
    update({
      name: username,
      email: useremail,
      phone: userphone,
      city: city,
      state: state,
      zipcode: zipcode,
      street: street,
      country: selectedCountry,
    });
    navigate("/payment");
  };

  useEffect(() => {
    setUsername(G && G.name);
    setUseremail(G && G.email);
    setUserphone(G && G.phone);
    setSelectedCountry(G && G.country);
    setCity(G && G.city);
    setState(G && G.state);
    setZipcode(G && G.zipcode);
  }, []);

  return (
    <div className="shippingbox">
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
            <h1 className="gradient-h1">Shipping details</h1>
            <span className="h3">
              We post labels anywhere in the world via international airmail
              (untracked). Due to increased postal delays around the busy
              holiday season, please allow up to 3 weeks for USA orders and 5
              weeks for the rest of the world. Need something sooner? With a
              Premium Membership you can print any of our labels at home or at a
              local print shop.
            </span>
            <Row style={{ marginTop: "20px" }}>
              <span className="h4">Personal Information</span>

              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => handleUserNameChange(e)}
                style={{
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderBottom: "none",
                }}
              ></input>
              <input
                type="email"
                placeholder="Email"
                value={useremail}
                onChange={(e) => handleUserEmailChange(e)}
                style={{
                  borderRadius: "0px",
                  borderTop: "none",
                  borderBottom: "none",
                }}
              ></input>
              <input
                type="phone"
                placeholder="Phone"
                value={userphone}
                onChange={(e) => handleUserPhoneChange(e)}
                style={{
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                  borderTop: "none",
                }}
              ></input>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span className="h4">Country</span>
                <Select
                  value={selectedCountry}
                  onChange={selectCountryHandler}
                  style={{
                    width: "100%",
                    padding: "5px 20px !important",
                    border: "3px solid #d9d9d9",
                    borderRadius: "5px !important",
                  }}
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

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-5">
                <span className="h4">City</span>
                <input
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => handleCityChange(e)}
                ></input>
              </Col>
              <Col className="col-7">
                <span className="">State</span>
                <input
                  type="text"
                  value={state}
                  placeholder="State"
                  onChange={(e) => handleStateChange(e)}
                ></input>
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-7">
                <span className="">Street address</span>
                <input
                  type="text"
                  value={street}
                  placeholder="Street"
                  onChange={(e) => handleStreetChange(e)}
                ></input>
              </Col>
              <Col className="col-5">
                <span className="">Zip / Postal Code</span>
                <input
                  type="text"
                  value={zipcode}
                  placeholder="Zipcode"
                  onChange={(e) => handleZipcodeChange(e)}
                ></input>
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
                  onClick={toPaymentPage}
                >
                  Next
                </button>
              </Col>
              <Col className="col-4">
                or
                <Link
                  to="/order"
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

export default ShippingBox;
