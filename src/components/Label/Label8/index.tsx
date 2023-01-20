import React, { useState, useEffect } from "react";

// import stylesheets
import "./label8.scss";

import label from "../../../assets/labels/Label-8.svg";

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

const Label8 = ({
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

  useEffect(() => {
    if (bottleName.length >= 6) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 6) {
      var t = 100 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(8);
    }
  }, [tagLine]);

  const [typeFontSize, setTypeFontSize] = useState(5);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 60 / (bottleType.length + 1);
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
            marginTop: "83px",
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
            marginTop: "9px",
            fontWeight: "200",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B6804A",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4px",
              marginLeft: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
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
                color: "#B6804A",
                position: "relative",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typeFontSize,
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#B6804A",
              textAlign: "center",
              fontSize: "5px",
              marginTop: "2px",
              marginRight: "12px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BigLabel8 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(35.4);
  const [tagFontSize, setTagFontSize] = useState(20);

  const [typeFontSize, setTypeFontSize] = useState(12.65);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 151.8 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(12.65);
    }
  }, [bottleType]);
  useEffect(() => {
    if (bottleName.length >= 6) {
      var t = 330 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(35.4);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 6) {
      var t = 250 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(20);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
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
            marginTop: "215px",
            height: "40px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",
            marginTop: "15px",
            fontWeight: "200",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B6804A",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              marginLeft: "23px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
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
                color: "#B6804A",
                position: "relative",
                fontWeight: "200",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typeFontSize,
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#B6804A",
              textAlign: "center",
              fontSize: "10px",
              marginTop: "2px",
              marginRight: "32px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Label8;
