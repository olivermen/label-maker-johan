import React, { useState, useEffect } from "react";

// import stylesheets
import "./label9.scss";

import label from "../../../assets/labels/Label-9.svg";

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

const Label9 = ({
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
    if (bottleType.length >= 10) {
      var t = 60 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);
  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 130 / (bottleName.length + 1);
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
            marginTop: "9px",
            height: "12px",
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
            marginTop: "3px",
            fontWeight: "200",
            height: "5px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: color,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "25px",
            marginLeft: "-60px",
          }}
        >
          <p
            style={{
              fontSize: "4px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "4px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: color,
            fontSize: typeFontSize,
            marginTop: "1px",
            position: "relative",
            marginLeft: "-60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontWeight: "200",
            textAlign: "center",
            height: "5px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: color,
            textAlign: "center",
            fontSize: "5px",
            marginTop: "70px",
            fontWeight: "200",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel9 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(27);
  const [tagFontSize, setTagFontSize] = useState(13);

  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 152 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);
  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 330 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(27);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(13);
    }
  }, [tagLine]);
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
            marginTop: "19px",
            height: "29px",
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
            fontWeight: "200",
            height: "15px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: color,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "65px",
            marginLeft: "-160px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: color,
            fontSize: typeFontSize,
            marginTop: "1px",
            marginLeft: "-160px",
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
            color: color,
            textAlign: "center",
            fontSize: "13px",
            marginTop: "180px",
            fontWeight: "200",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label9;
