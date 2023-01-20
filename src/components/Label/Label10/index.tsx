import React, { useState, useEffect } from "react";

// import stylesheets
import "./label10.scss";

import label from "../../../assets/labels/Label-10.svg";

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

const Label10 = ({
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
  const [tagFontSize, setTagFontSize] = useState(7);
  const [typeFontSize, setTypeFontSize] = useState(4);

  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 60 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(4);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 90 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(8);
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
            marginTop: "84px",
            height: "10px",
          }}
        >
          {bottleName}
        </p>
        {/* <p
          style={{
            color: color,
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p> */}
        <div
          style={{
            color: "#201E31",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "27px",
          }}
        >
          <div
            style={{
              color: "#201E31",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bevan",
            }}
          >
            <div
              style={{
                color: "#201E31",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                color: "#201E31",
                fontSize: typeFontSize,
                marginTop: "1px",
                position: "relative",
                fontWeight: "200",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#201E31",
              fontSize: "5px",
              fontWeight: "200",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BigLabel10 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(21);
  const [tagFontSize, setTagFontSize] = useState(13);
  const [typeFontSize, setTypeFontSize] = useState(10.1);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 152 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(10.1);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 230 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(21);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 230 / (tagLine.length + 1);
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
            marginTop: "214px",
            height: "23px",
          }}
        >
          {bottleName}
        </p>
        {/* <p
          style={{
            color: color,
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p> */}
        <div
          style={{
            color: "#201E31",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "69px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bevan",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                color: "#201E31",
                fontSize: typeFontSize,
                marginTop: "1px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "200",
                textAlign: "center",
                height: "12px",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#201E31",
              fontSize: "12px",
              fontWeight: "200",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Label10;
