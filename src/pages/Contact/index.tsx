import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import img from "../../assets/main/contact.svg";
import useStore from "../../useStore";

export default function ContactUs() {
  const [open, setOpen] = React.useState(true);
  const { T } = useStore();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            color: "#fea150",
            fontSize: "33px",
            fontWeight: "900",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          {T("contact.header")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: "15px",
              color: "black",
              padding: "5px 50px",
              marginBottom: "30px",
              lineHeight: "2",
            }}
          >
            <img
              src={img}
              width="500px"
              height="250px"
              alt="contact us"
              style={{ marginBottom: "20px" }}
            />
            {T("contact.content")}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
