import React, { useState, useEffect } from "react";

// import stylesheets
import "./label15.scss";

import label from "../../../assets/labels/Label-15.svg";

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

const Label15 = ({
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
  const [tagFontSize, setTagFontSize] = useState(14);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(9);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(14);
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
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7px",
            height: "15px",
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
            marginTop: "2px",
            fontWeight: "900",
            height: "10px",
          }}
        >
          {bottleName}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "80px",
          }}
        >
          <p
            style={{
              fontSize: `5px`,
              textAlign: "center",
              marginRight: "5px",

              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `5px`,
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
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
            fontSize: "6px",
            marginTop: "5px",
            color: "white",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel15 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(19);
  const [tagFontSize, setTagFontSize] = useState(30);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 330 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(19);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(30);
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
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            height: "32px",
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
            marginTop: "15px",
            fontWeight: "900",
            height: "21px",
          }}
        >
          {bottleName}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "200px",
          }}
        >
          <p
            style={{
              fontSize: `10px`,
              textAlign: "center",
              marginRight: "5px",

              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `10px`,
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "5px",
            height: "11px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "10px",
            marginTop: "15px",
            color: "white",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label15;
