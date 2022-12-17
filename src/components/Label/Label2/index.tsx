import React from "react";

// import stylesheets
import "./label2.scss";

import label from "../../../assets/labels/l2.svg";

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

const Label2 = ({
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
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "#E38F58",
            fontSize: `12px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "85px",
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
            marginTop: "2px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#062452",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "15px",
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
            color: "#062452",
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
            color: "#062452",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel2 = ({
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
        alt="upload"
        style={{ margin: "2px 0px 2px 0px", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: "#E38F58",
            fontSize: `23px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "225px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `18px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <div
          style={{
            color: "#062452",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "35px",
            fontSize: `10px`,
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
            fontSize: `10px`,

            position: "relative",
            fontFamily: "Bevan",
            marginTop: "2px",
            color: "#062452",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: `10px`,

            fontFamily: "Bevan",
            marginTop: "8px",
            color: "#062452",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label2;
