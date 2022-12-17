import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/main/contact.png";

export default function ContactUs() {
  const [open, setOpen] = React.useState(true);

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
          Contact US
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
            If you have any problems using the site, don't be afraid to email us
            for help. We'll get back to you as soon as possible. We also
            appreciate any feedback about the site. If you have any suggestions
            for how the site can be improved please contact us on the email
            below. admin@jamlabelizer.com
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
