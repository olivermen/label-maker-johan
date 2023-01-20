import React, { useState, useEffect } from "react";

// import stylesheets
import "./label6.scss";

import label from "../../../assets/labels/Label-6.svg";

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

const Label6 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(14);
  const [tagFontSize, setTagFontSize] = useState(7);
  const [typeFontSize, setTypeFontSize] = useState(5);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 110 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(7);
    }
  }, [tagLine]);

  useEffect(() => {
    if (bottleType.length >= 15) {
      var t = 110 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
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
      <div
        className="label-text"
        style={{ width: "150px", height: "150px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "45px",
            height: "16px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6px",
            height: "8px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B19D71",
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
              fontSize: "5px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "5px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#B19D71",
            fontSize: typeFontSize,
            marginTop: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
            height: "7px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#B19D71",
            textAlign: "center",
            fontSize: "5px",
            marginTop: "10px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel6 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(35.42);
  const [tagFontSize, setTagFontSize] = useState(17.7);
  const [typeFontSize, setTypeFontSize] = useState(12.65);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 278 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(35.42);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 329 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(17.7);
    }
  }, [tagLine]);

  useEffect(() => {
    if (bottleType.length >= 15) {
      var t = 278 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);
  return (
    <div
      className="label"
      style={{
        background: "black",
        height: "380px",
        width: "380px",
        borderRadius: "8px",
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
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "120px",
            height: "40px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "12px",
            height: "20px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B19D71",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "35px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#B19D71",
            fontSize: typeFontSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: "3px",
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
            height: "15px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#B19D71",
            textAlign: "center",
            fontSize: "13px",
            marginTop: "27px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label6;
