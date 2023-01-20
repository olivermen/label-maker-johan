import React, { useState, useEffect } from "react";

// import stylesheets
import "./label26.scss";

import label from "../../../assets/labels/Label-26.svg";

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

const Label26 = ({
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

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 130 / (bottleName.length + 1);
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
      setTagFontSize(7);
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
            marginTop: "35px",
            marginLeft: "-8px",
            transform: "rotate(-15deg)",
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
            transform: "rotate(-15deg)",
            height: "9px",
          }}
        >
          {tagLine}
        </p>

        <div
          style={{
            color: "#E09616",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "60px",
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
            color: "#E09616",
            fontSize: "5px",
            marginTop: "1px",
            position: "relative",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#E09616",
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

export const BigLabel26 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(36);
  const [tagFontSize, setTagFontSize] = useState(18);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 328 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(36);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 202 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(17);
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
            marginTop: "85px",
            marginLeft: "-18px",
            transform: "rotate(-15deg)",
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
            marginTop: "-2px",
            marginLeft: "3px",
            transform: "rotate(-15deg)",
            height: "18px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#E09616",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "163px",
          }}
        >
          <p
            style={{
              fontSize: "12.7px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "12.7px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#E09616",
            fontSize: "12.7px",
            marginTop: "1px",
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            fontSize: "12.7px",
            color: "#E09616",
            textAlign: "center",
            fontWeight: "200",
            marginTop: "2px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label26;
