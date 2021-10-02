import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import img1 from "../img/fo2.png";

import "../Css/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "rgba(13, 13, 13, 1)",
  },
  conTitle: {
    textAlign: "center",
    paddingTop: "30vh",
    "@media (max-height:350px)": {
      paddingTop: "20vh",
    },
  },
  title1: {
    color: "#05F2DB",
    opacity: "0",
    animationDuration: "2s",
    animationName: "$example",
    animationDelay: "1.5s",
    animationFillMode: "forwards",
  },
  title2: {
    opacity: "0",
    height: "50px",
    color: "#05F2DB",
    animationDuration: "2s",
    animationName: "$example",
    animationDelay: "2s",
    animationFillMode: "forwards",
  },
  title3: {
    display: "inline-block",
    opacity: "0",
    color: "rgba(255, 255, 255, 1)",
    animationDuration: "1s",
    animationName: "$example",
    animationDelay: "1s",
    animationFillMode: "forwards",
  },
  img1: {
    position: "absolute",
    opacity: "0",
    bottom: "1px",
    left: "0px",
    width: "70%",
    height: "auto",
    objectFit: "cover",
    WebkitBoxReflect: "right",
    filter: "drop-shadow(5px 5px 10px #fff)",
    animationDuration: "20s",
    animationDirection: "alternate",
    animationName: "$img",
    animationIterationCount: "infinite",
    [theme.breakpoints.down("sm")]: {
      WebkitBoxReflect: "inherit",
      width: "100%",
    },
    "@media (max-height:550px)": {
      display: "none",
    },
  },
  "@keyframes example": {
    from: {
      opacity: "0",
    },
    to: {
      opacity: "1",
    },
  },
  "@keyframes img": {
    "0%": {
      opacity: "1",
      filter: "drop-shadow(1px 1px 1px #fff)",
    },
    "50%": {
      opacity: "1",
      filter: "drop-shadow(1px 1px 1px #05f2db)",
    },
    "100%": {
      opacity: "1",
      filter: "drop-shadow(1px 1px 1px #034C8C)",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Inicio">
      <div className={classes.conTitle}>
        <Typography className={classes.title1} variant="h2" color="initial">
          HOLA, MI NOMBRE ES HÉCTOR
        </Typography>
        <Typography className={classes.title2} variant="h3" color="initial">
          DESARROLLADOR <div className={classes.title3}>WEB</div>
        </Typography>
        <img className={classes.img1} src={img1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
