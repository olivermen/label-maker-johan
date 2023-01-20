import React, { useState, useEffect } from "react";

// import stylesheets
import "./label19.scss";

import label from "../../../assets/labels/Label-19.svg";

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

const Label19 = ({
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
  const [tagFontSize, setTagFontSize] = useState(10);
  const [typeFontSize, setTypeFontSize] = useState(5);
  useEffect(() => {
    if (bottleType.length >= 20) {
      var t = 140 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 3) {
      var t = 60 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(10);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        backgroundColor: "white",
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
            marginTop: "40px",
            height: "17px",
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
            marginTop: "40px",
            fontWeight: "200",
            height: "13px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#492B0B",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "8px",
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
            color: "#492B0B",
            fontSize: typeFontSize,
            marginTop: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
            height: "8px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#492B0B",
            textAlign: "center",
            fontSize: "5px",
            marginTop: "3px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel19 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(33);
  const [tagFontSize, setTagFontSize] = useState(25);
  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 20) {
      var t = 354 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 3) {
      var t = 177 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(33);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(10);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        backgroundColor: "white",
        height: "380px",
        width: "380px",
        borderRadius: "25px",
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
            marginTop: "100px",
            height: "37px",
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
            marginTop: "110px",
            fontWeight: "200",
            height: "24px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#492B0B",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "10px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#492B0B",
            fontSize: typeFontSize,
            marginTop: "1px",
            position: "relative",
            fontWeight: "200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textAlign: "center",
            height: "13px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#492B0B",
            textAlign: "center",
            fontSize: "10px",
            marginTop: "20px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label19;
