import React from "react";

// import stylesheets
import "./slabel1.scss";

import label from "../../../assets/labels/Label-S1.svg";

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

const SLabel1 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
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
        style={{ margin: "2px 2px 2px 0px", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: color,
            fontSize: `9px`,
            position: "relative",
            textAlign: "center",
            marginTop: "28px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `7px`,
            position: "relative",
            marginTop: "-1px",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `12px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "La Belle Aurore",
            marginTop: "41px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "-4px",
          }}
        >
          {vol}% /vol
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
          }}
        >
          {cl} cl
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "8px",
            marginTop: "14px",
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const SBigLabel1 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
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
            color: color,
            fontSize: `20px`,
            position: "relative",
            textAlign: "center",
            marginTop: "71px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `16px`,
            position: "relative",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `30px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "La Belle Aurore",
            marginTop: "100px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "-5px",
          }}
        >
          {vol}% /vol
        </p>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
          }}
        >
          {cl} cl
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "15px",
            marginTop: "38px",
            color: color,
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default SLabel1;
