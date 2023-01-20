import React, { useState, useEffect } from "react";

// import stylesheets
import "./label3.scss";

import label from "../../../assets/labels/Label-3.svg";

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

const Label3 = ({
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
  const [tagFontSize, setTagFontSize] = useState(8);
  const [typeFontSize, setTypeFontSize] = useState(5);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 15) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(8);
    }
  }, [tagLine]);
  useEffect(() => {
    if (bottleType.length >= 15) {
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
            marginTop: "78px",
            height: "18px",
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
            marginTop: "2px",
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
            marginTop: "10px",
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
            marginTop: "2px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel3 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(37);
  const [tagFontSize, setTagFontSize] = useState(17);
  const [typeFontSize, setTypeFontSize] = useState(12.65);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 330 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(37);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(17);
    }
  }, [tagLine]);

  useEffect(() => {
    if (bottleType.length >= 15) {
      var t = 330 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);
  return (
    <div
      className="label"
      style={{
        background: "white",
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
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "196px",
            height: "45px",
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
            marginTop: "7px",
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
            marginTop: "23px",
            fontSize: "12px",
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
            color: "#B19D71",
            fontSize: typeFontSize,
            marginTop: "3px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "14px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#B19D71",
            textAlign: "center",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label3;
