import React, { useEffect, useState } from "react";

// import stylesheets
import "./label13.scss";

import label from "../../../assets/labels/Label-13.svg";

import Draggable from "react-draggable";
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

const Label13 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(15);
  const [tagFontSize, setTagFontSize] = useState(6);
  const [typeFontSize, setTypeFontSize] = useState(5);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 80 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 6) {
      var t = 80 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(15);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 80 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(6);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        background: "white",
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
            color: "#BF6500",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
            height: "7px",
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
            marginTop: "45px",
            fontWeight: "900",
            height: "17px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            fontSize: typeFontSize,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "0px",
            color: "#BF6500",
            textAlign: "center",
            height: "6px",
          }}
        >
          {bottleType}
        </p>
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "30px",
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
            position: "relative",
            textAlign: "center",
            fontSize: "5px",
            fontFamily: "Bevan",
            marginTop: "2px",
            color: "black",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel13 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(40);
  const [tagFontSize, setTagFontSize] = useState(15);
  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 202 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 6) {
      var t = 202 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(40);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 202 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(15);
    }
  }, [tagLine]);
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
            color: "#BF6500",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "27px",
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
            marginTop: "110px",
            fontWeight: "900",
            height: "42px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            fontSize: typeFontSize,
            position: "relative",
            fontFamily: "Bevan",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            color: "#BF6500",
            textAlign: "center",
            height: "14px",
          }}
        >
          {bottleType}
        </p>
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "76px",
          }}
        >
          <p
            style={{
              fontFamily: "Bevan",
              fontSize: `13px`,
              textAlign: "center",
              marginRight: "5px",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `13px`,
              fontFamily: "Bevan",
              textAlign: "center",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "13px",
            fontFamily: "Bevan",
            marginTop: "5px",
            color: "black",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label13;
