import React, { useEffect, useState } from "react";

// import stylesheets
import "./label30.scss";

import label from "../../../assets/labels/Label-30.svg";

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

const Label30 = ({
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
  const [tagFontSize, setTagFontSize] = useState(6);
  const [typeFontSize, setTypeFontSize] = useState(4);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 40 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(4);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 20) {
      var t = 140 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(6);
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
            color: "black",
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "68px",
            height: "15px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",
            marginTop: "8px",
            fontWeight: "200",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "7px",
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
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "5px",
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
                color: color,
                position: "relative",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: typeFontSize,
                height: "5px",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: color,
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

export const BigLabel30 = ({
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
  const [tagFontSize, setTagFontSize] = useState(15);
  const [typeFontSize, setTypeFontSize] = useState(10.1);
  useEffect(() => {
    if (bottleType.length >= 10) {
      var t = 101 / (bottleType.length + 1);
      setTypeFontSize(t);
    } else {
      setTypeFontSize(10.1);
    }
  }, [bottleType]);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 329 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(35);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 20) {
      var t = 354 / (tagLine.length + 1);
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
            color: "black",
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "170px",
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
            marginTop: "15px",
            fontWeight: "200",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "19px",
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
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "30px",
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
                color: color,
                position: "relative",
                fontWeight: "200",
                textAlign: "center",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typeFontSize,
                height: "12px",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: color,
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

export default Label30;
