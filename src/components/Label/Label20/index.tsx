import React, { useState, useEffect } from "react";

// import stylesheets
import "./label20.scss";

import label from "../../../assets/labels/Label-20.svg";

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

const Label20 = ({
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
      var t = 60 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 70 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 100 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(10);
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
            color: color,
            fontSize: nameFontSize,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "80px",
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
            marginTop: "0px",
            height: "12px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "black",
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
            color: "black",
            fontSize: typeFontSize,
            marginTop: "1px",
            position: "relative",
            textAlign: "center",
            height: "6px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "black",
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

export const BigLabel20 = ({
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
  const [tagFontSize, setTagFontSize] = useState(26.4);
  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 20) {
      var t = 152 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 177 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(37);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 250 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(26.4);
    }
  }, [tagLine]);
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
            height: "43px",
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
            height: "28px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "black",
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
            color: "black",
            fontSize: typeFontSize,
            marginTop: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            textAlign: "center",
            height: "14px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "black",
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

export default Label20;
