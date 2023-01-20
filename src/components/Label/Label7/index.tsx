import React, { useState, useEffect } from "react";

// import stylesheets
import "./label7.scss";

import label from "../../../assets/labels/Label-7.svg";

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

const Label7 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(8);
  const [tagFontSize, setTagFontSize] = useState(12);
  const [typeFontSize, setTypeFontSize] = useState(5);

  useEffect(() => {
    if (bottleName.length >= 12) {
      var t = 90 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(8);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 7) {
      var t = 110 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(12);
    }
  }, [tagLine]);
  useEffect(() => {
    if (bottleType.length >= 25) {
      var t = 130 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

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
        style={{ margin: "2px 0px 2px 2px", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "85px",
            height: "17px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "2px",
            fontWeight: "900",
            height: "10px",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#062452",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "15px",
          }}
        >
          <p
            style={{
              fontFamily: "Bevan",
              fontSize: `5px`,
              textAlign: "center",
              marginRight: "5px",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `5px`,
              fontFamily: "Bevan",
              textAlign: "center",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            fontSize: typeFontSize,
            position: "relative",
            fontFamily: "Bevan",
            marginTop: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#062452",
            textAlign: "center",
            height: "5px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "5px",
            fontFamily: "Bevan",
            marginTop: "2px",
            color: "#062452",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel7 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(20.24);
  const [tagFontSize, setTagFontSize] = useState(30.36);
  const [typeFontSize, setTypeFontSize] = useState(12.65);

  useEffect(() => {
    if (bottleName.length >= 12) {
      var t = 227.7 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(20.24);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 7) {
      var t = 278 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(30.36);
    }
  }, [tagLine]);
  useEffect(() => {
    if (bottleType.length >= 25) {
      var t = 329 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);
  return (
    <div
      className="label"
      style={{
        height: "380px",
        width: "380px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload image"
        style={{ margin: "2px 0px 2px 0px", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "225px",
            height: "28px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
            fontWeight: "900",
            height: "23px",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#062452",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "35px",
            fontSize: `10px`,
          }}
        >
          <p
            style={{
              fontFamily: "Bevan",
              textAlign: "center",
              marginRight: "5px",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontFamily: "Bevan",
              textAlign: "center",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            fontSize: typeFontSize,

            position: "relative",
            fontFamily: "Bevan",
            marginTop: "2px",
            color: "#062452",
            textAlign: "center",
            height: "15px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: `10px`,

            fontFamily: "Bevan",
            marginTop: "8px",
            color: "#062452",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label7;
