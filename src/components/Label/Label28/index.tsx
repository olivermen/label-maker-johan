import React, { useEffect, useState } from "react";

// import stylesheets
import "./label28.scss";

import label from "../../../assets/labels/Label-28.svg";

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

const Label28 = ({
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
      var t = 80 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 100 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 80 / (tagLine.length + 1);
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
            marginTop: "25px",
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
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
            height: "6px",

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

export const BigLabel28 = ({
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
  const [tagFontSize, setTagFontSize] = useState(23.5);
  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 20) {
      var t = 202 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 253 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(33);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 202 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(23.5);
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
            marginTop: "60px",
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
            height: "23px",
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
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "12px",
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

export default Label28;
