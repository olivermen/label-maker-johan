import React from "react";

// import stylesheets
import "./label.scss";

import label from "../../assets/labels/l0.svg";

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

const Label = ({
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
        background: "black",
        height: "150px",
        width: "150px",
      }}
    >
      <img
        src={label}
        width={146}
        height={146}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: color,
            fontSize: `9px`,
            position: "relative",
            textAlign: "center",
            marginTop: "26px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `8px`,
            position: "relative",
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
            marginTop: "50px",
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
            marginTop: "3px",
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

export const BigLabel = ({
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
        background: "black",
        height: "380px",
        width: "380px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: color,
            fontSize: `22px`,
            position: "relative",
            textAlign: "center",
            marginTop: "64px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `20px`,
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
            marginTop: "130px",
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
            marginTop: "15px",
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

export default Label;
