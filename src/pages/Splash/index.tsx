import React, { useEffect } from "react";

// import stylesheets
import "./splash.scss";

// import sub components

// import signin modal
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";

import spain from "../../assets/flags/spain.svg";
import us from "../../assets/flags/us.svg";
import sweden from "../../assets/flags/sweden.svg";
import useStore from "../../useStore";
import { Helmet } from "react-helmet";
import axios from "axios";

const emails = ["English", "Swedish", "Spanish"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const navigate = useNavigate();
  const { update } = useStore();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
    if (value === "English") 
    { 
      update({ lang: "en-US" });  
      navigate("/en/edit");
    };
    if (value === "Swedish") {
      update({ lang: "sw-SW" });
      navigate("/sv/edit");
    }
    if (value === "Spanish") {
      update({ lang: "es-ES" });
      navigate("/es/edit");
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose language</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={index}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                {index === 0 ? (
                  <img src={us} width="40" height="40" alt="us label" />
                ) : index === 1 ? (
                  <img src={sweden} width="40" height="40" alt="sweden label" />
                ) : (
                  <img src={spain} width="40" height="40" alt="spain label" />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

const Splash = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const { T, update } = useStore();

  const handleClickOpen = () => {
    getIPAddress();
    setOpen(true);
  };

  const getIPAddress = async () => {
    const result = await axios.get(`https://geolocation-db.com/json/`);
    update({
      country: result.data.country_name,
      country_code: result.data.country_code,
    });
  };
  const handleClose = (value: string) => {
    // setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    // Wait for 3 seconds
    handleClickOpen();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {T("title.about")}
        </title>
        <meta name="title" content={T("title.about")} />
        <meta
          name="description"
          content={T("description.about")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>

      <div className="splash">
        <h1>Label for Homebrew</h1>
        <React.Fragment>
          <ScaleLoader color="white" width={15} height={50} margin={5} />
        </React.Fragment>
        <div>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default Splash;
