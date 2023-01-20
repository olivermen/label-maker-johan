import React, { useEffect, useState } from "react";

// import stylesheets
import "./label12.scss";

import label from "../../../assets/labels/Label-12.svg";

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

const Label12 = ({
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
    if (bottleType.length >= 10) {
      var t = 110 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(5);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 100 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 80 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(8);
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
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
            height: "14px",
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
            height: "9px",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: color,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "85px",
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
            color: color,
            textAlign: "center",
            height: "6px",
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
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel12 = ({
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
  const [tagFontSize, setTagFontSize] = useState(28);
  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 278.3 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 280 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(20);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 180 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(28);
    }
  }, [tagLine]);

  return (
    <div
      className="label"
      style={{
        background: "white",
        borderRadius: "20px",
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
      <div className="label-image1">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div>
            <img
              src={file}
              width={376}
              height={376}
              alt="upload image"
              className="noDrag"
              style={{ position: "absolute" }}
            />
          </div>
        </Draggable>
      </div>
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: "#A60E0E",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "15px",
            height: "30px",
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
            marginTop: "23px",
            fontWeight: "900",
            height: "22px",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: color,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            fontSize: `12px`,
            marginTop: "220px",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            fontFamily: "Bevan",
            marginTop: "3px",
            color: color,
            textAlign: "center",
            height: "13px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: `12px`,

            fontFamily: "Bevan",
            marginTop: "10px",
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label12;
