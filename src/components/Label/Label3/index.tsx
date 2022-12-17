import React, { useEffect } from "react";

// import stylesheets
import "./label3.scss";

import label from "../../../assets/labels/l3.svg";

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

const Label3 = ({
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
        alt="upload"
        style={{ margin: "2px 0px 2px 2px", maxWidth: "100%" }}
      />
      <div className="label-image">
        <Draggable>
          <div>
            <img src={file} width={146} height={146} alt="upload" />
          </div>
        </Draggable>
      </div>

      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "#A60E0E",
            fontSize: `12px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `8px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "86px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#B12C2C",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "5px",
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
            fontSize: `5px`,
            position: "relative",
            fontFamily: "Bevan",
            marginTop: "0px",
            color: "#B12C2C",
            textAlign: "center",
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
            color: "#B12C2C",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel3 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  useEffect(() => {}, []);
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
        alt="upload"
        style={{ margin: "2px 0px 2px 0px", maxWidth: "100%" }}
      />
      <div className="label-image1">
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
          <div>
            <img
              src={file}
              width={376}
              height={376}
              alt="upload"
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
            fontSize: `28px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "15px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `20px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "233px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#B12C2C",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            fontSize: `12px`,
            marginTop: "10px",
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
            fontSize: `12px`,

            position: "relative",
            fontFamily: "Bevan",
            marginTop: "3px",
            color: "#B12C2C",
            textAlign: "center",
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
            color: "#B12C2C",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label3;
