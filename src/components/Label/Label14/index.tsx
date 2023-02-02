import React, { useEffect, useState } from "react";

// import stylesheets
import "./label14.scss";

import label from "../../../assets/labels/Label-14.svg";
import Draggable from "react-draggable";
// import images
import myStore from "../../../useStore";

import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const PrettoSlider = styled(Slider)({
  color: "#f29f37",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#f29f37",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

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

const Label14 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  console.log("file", file);
  const [nameFontSize, setNameFontSize] = useState(14);
  const [tagFontSize, setTagFontSize] = useState(6);

  const { T, update }: any = myStore();
  const G: any = myStore();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  useEffect(() => {
    const tmp = value / 50 + 1;
    update({ zoom: tmp });
  }, [value]);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 15) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(6);
    }
  }, [tagLine]);

  const handleStop = (e: any, data: any) => {
    console.log(data.lastX, data.lastY);
    update({ curImageX: data.lastX, curImageY: data.lastY });
  };

  return (
    <>
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
        <div className="label-image14">
          <Draggable
            defaultPosition={{ x: G.curImageX, y: G.curImageY }}
            onStop={handleStop}
          >
            <div>
              <img
                src={file}
                alt="upload image"
                className="noDrag"
                width={146 * G.zoom}
                height={146 * G.zoom}
                style={{ position: "absolute" }}
              />
            </div>
          </Draggable>
        </div>
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
              marginTop: "95px",
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

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2px",
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
              justifyContent: "center",
              fontFamily: "Bevan",
              marginTop: "4px",
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
              color: color,
              fontSize: "5px",
              marginTop: "1px",
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
              color: color,
              textAlign: "center",
              fontSize: "5px",
              marginTop: "2px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="Size"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export const BigLabel14 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(37);
  const [tagFontSize, setTagFontSize] = useState(17);

  const { T, update }: any = myStore();
  const G: any = myStore();

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 330 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(37);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 15) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(17);
    }
  }, [tagLine]);

  const handleStop = (e: any, data: any) => {
    console.log(data.lastX, data.lastY);
    update({ curImageX: data.lastX, curImageY: data.lastY });
  };

  return (
    <div
      className="label"
      style={{
        background: color,
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
        <div className="label-image114">
          <Draggable
            defaultPosition={{ x: G.curImageX * 2.53, y: G.curImageY * 2.53 }}
            onStop={handleStop}
            disabled
          >
            <div>
              <img
                src={file}
                alt="upload image"
                className="noDrag"
                width={376 * G.zoom}
                height={376 * G.zoom}
                style={{ position: "absolute" }}
              />
            </div>
          </Draggable>
        </div>
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "240px",
            height: "39px",
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
            marginTop: "7px",
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
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
            fontSize: "12px",
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
            fontSize: "12px",
            marginTop: "3px",
            position: "relative",
            textAlign: "center",
            height: "13px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: color,
            textAlign: "center",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label14;
