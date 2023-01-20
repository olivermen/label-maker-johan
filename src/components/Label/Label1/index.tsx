import React, { useEffect, useState } from "react";

// import stylesheets
import "./label1.scss";

import label from "../../../assets/labels/Label-1.svg";

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

const Label1 = ({
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
  const [tagFontSize, setTagFontSize] = useState(9);
  const [typeFontSize, setTypeFontSize] = useState(8);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 15) {
      var t = 140 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(9);
    }
  }, [tagLine]);

  useEffect(() => {
    if (bottleType.length >= 17) {
      var t = 140 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(8);
    }
  }, [bottleType]);

  return (
    <div
      className="label"
      style={{
        background: "white",
        borderRadius: "30px",
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
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7px",
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
            marginTop: "2px",
            fontWeight: "900",
            height: "10px",
          }}
        >
          {tagLine}
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
            fontSize: typeFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "8px",
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

export const BigLabel1 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(35);
  const [tagFontSize, setTagFontSize] = useState(23);
  const [typeFontSize, setTypeFontSize] = useState(20);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 329 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(35);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 15) {
      var t = 354 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(23);
    }
  }, [tagLine]);

  useEffect(() => {
    if (bottleType.length >= 17) {
      var t = 354 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(20);
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
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: "white",
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            height: "38px",
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
            fontWeight: "900",
            height: "25px",
          }}
        >
          {tagLine}
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
            fontSize: typeFontSize,
            position: "relative",
            textAlign: "center",
            marginTop: "5px",
            height: "22px",
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

export default Label1;
