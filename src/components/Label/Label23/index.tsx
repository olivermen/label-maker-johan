import React, { useState, useEffect } from "react";

// import stylesheets
import "./label23.scss";

import label from "../../../assets/labels/Label-23.svg";
import { type } from "os";

interface LabelProps {
  bottleName: string;
  vol: string;
  cl: string;
  tagLine: string;
  color: string;
  batchDate: string;
  bottleType: string;
  file?: string;
}

const Label23 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(20);
  const [tagFontSize, setTagFontSize] = useState(13);
  const [typeFontSize, setTypeFontSize] = useState(4);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 40 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(4);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 5) {
      var t = 100 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(20);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 80 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(13);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        height: "150px",
        width: "150px",
      }}
    >
      <img
        src={label}
        width={146}
        height={146}
        alt="upload image"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "150px", height: "150px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: "#FFFFFF",
            fontSize: tagFontSize,
            position: "relative",
            marginTop: "35px",
            fontWeight: "200",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "15px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "15px",
            height: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4px",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                position: "relative",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "6px",
                fontSize: typeFontSize,
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "5px",
              marginTop: "2px",
              marginRight: "18px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>

        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
            height: "22px",
          }}
        >
          {bottleName}
        </p>
      </div>
    </div>
  );
};

export const BigLabel23 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(51);
  const [tagFontSize, setTagFontSize] = useState(33);
  const [typeFontSize, setTypeFontSize] = useState(10.1);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 101.2 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(10.1);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 5) {
      var t = 253 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(51);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 203 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(33);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        height: "380px",
        width: "380px",
        borderRadius: "80px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload image"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "380px", height: "380px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: "#FFFFFF",
            fontSize: tagFontSize,
            position: "relative",
            marginTop: "90px",
            fontWeight: "200",
            marginLeft: "10px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "39px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "40px",
            height: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: "200",
                position: "relative",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: typeFontSize,
                height: "12px",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "10px",
              marginTop: "2px",
              marginRight: "18px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>

        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            marginLeft: "10px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "55px",
            height: "58px",
          }}
        >
          {bottleName}
        </p>
      </div>
    </div>
  );
};

export default Label23;
