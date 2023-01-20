import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./news.scss";
import useStore from "../../useStore";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import { Helmet } from "react-helmet";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const News = () => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { T } = useStore();
  return (
    <>
      <Helmet>
        <title>
          {T("title.news")}
        </title>
        <meta name="title" content={T("title.news")} />
        <meta
          name="description"
          content={T("description.news")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <div className="news">
              <h1>{T("news.header")}</h1>
              <h2>{T("news.subheader")}</h2>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="faq"

              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{T("news.news1")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content1")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="faq"
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{T("news.news2")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content2")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className="faq"

              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>{T("news.news3")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content3")}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                className="faq"
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Typography>{T("news.news4")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content4")}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                className="faq"
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <Typography>{T("news.news5")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content5")}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                className="faq"
              >
                <AccordionSummary
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                  <Typography>{T("news.news6")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{T("news.content6")}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default News;
