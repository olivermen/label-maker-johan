import React, { useState, useEffect } from "react";

// import stylesheets
import "./label5.scss";

import label from "../../../assets/labels/Label-5.svg";
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

const Label5 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(9);
  const [tagFontSize, setTagFontSize] = useState(12);
  const [typeFontSize, setTypeFontSize] = useState(8);

  useEffect(() => {
    if (bottleName.length >= 5) {
      var t = 50 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(9);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 6) {
      var t = 70 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(12);
    }
  }, [tagLine]);
  useEffect(() => {
    if (bottleType.length >= 6) {
      var t = 70 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(8);
    }
  }, [bottleType]);
  return (
    <div
      className="label"
      style={{
        background: "black",
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
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "26px",
            fontWeight: "900",
            height: "11px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: typeFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "La Belle Aurore",
            marginTop: "50px",
            height: "14px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
          }}
        >
          {vol}% /vol
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
          }}
        >
          {cl} cl
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "8px",
            marginTop: "12px",
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel5 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(22.7);
  const [tagFontSize, setTagFontSize] = useState(29.3);
  const [typeFontSize, setTypeFontSize] = useState(20);

  useEffect(() => {
    if (bottleName.length >= 5) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(22.7);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 6) {
      var t = 177 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(29.3);
    }
  }, [tagLine]);
  useEffect(() => {
    if (bottleType.length >= 6) {
      var t = 177 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(20);
    }
  }, [bottleType]);
  return (
    <div
      className="label"
      style={{
        background: "black",
        height: "380px",
        width: "380px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload image"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "64px",
            fontWeight: "900",
            height: "27px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: typeFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "25px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "La Belle Aurore",
            marginTop: "130px",
            height: "35px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          {vol}% /vol
        </p>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
          }}
        >
          {cl} cl
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "15px",
            marginTop: "38px",
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label5;
