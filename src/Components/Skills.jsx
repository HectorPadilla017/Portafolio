import React from "react";
import { Divider, Typography, Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

// import useWindowPosition from "../Hook/useWindowPosition";
import LinearPro from "./Content/LinearPro";

// import img from '../img/img1.jpg'
// import "../Css/styles.css";

import "../Function/Animation";
import "../Css/Animation.css";

// window.addEventListener("scroll", function () {
//   let animacion = document.getElementById("animado");
//   let posicionObj1 = animacion.getBoundingClientRect().top;
//   let tamañoDePantalla = window.innerHeight / 2.5;

//   if (posicionObj1 < tamañoDePantalla) {
//     animacion.style.animation = "progress 2s forwards";
//   }
// });

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "auto",
    // height: "720px",
  },
  col: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    background: "rgba(13, 13, 13, 1)",
    zIndex: "2",
  },
  content: {
    color: "rgba(255, 255, 255, 1)",
    position: "relative",
    zIndex: "3",
    padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 1, 5),
    },
  },
  title: {
    textAlign: "center",
    // color: '#05F2DB',
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Elianto",
  },
  divider: {
    width: "450px",
    height: "2px",
    marginTop: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  cont: {
    padding: theme.spacing(8, 0, 8),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 0, 5),
    },
  },
  contText: {
    margin: "16px 5px 0px 5px",
  },
  item1: {
    // marginTop: "auto",
    // marginBottom: "auto",
  },
  item2: {
    marginBottom: "auto",
    justifyContent: "center",
    alignItem: "center",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0, 2),
    },
  },
  text1: {
    height: "40px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
  },
  text2: {
    fontSize: "14px",
    transition: "all .6s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  text3: {
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
  card: {
    maxWidth: "500px",
    textAlign: "justify",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    color: "rgba(255, 255, 255, 1)",
    background: "#05F2DB",
    background: "-webkit-linear-gradient(120deg, #05F2DB, #012340)",
    background: "linear-gradient(120deg, #05F2DB, #012340)",
    padding: theme.spacing(2, 2, 0),
  },
  progress: {
    position: "relative",
    height: "7px",
    width: "auto",
    borderRadius: "5px",
    margin: "15px 0 0 10px",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#fff",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Habilidades">
      <div className={classes.col} />
      <div className={classes.content}>
        <Typography className={classes.title} variant="h3" color="inherit">
          Habilidades
        </Typography>
        {/* <Divider className={classes.divider} /> */}
        <Grid container className={classes.cont}>
          <Grid item md={6} sm={12} className={classes.item2}>
            <Card className={classes.card}>
              <Typography
                className={classes.text3}
                gutterBottom
                variant="subtitle1"
              >
                Front-end Development
              </Typography>
              <Typography gutterBottom variant="body1">
                El desarrollo Front-end consiste en crear los componenetes
                visuales de las páginas web con diseños responsivos e
                interactivos para una mejor experiencia.
              </Typography>
              <div className={classes.progress}>
                <div className="pro_70" />
              </div>
              <div className={classes.contText}>
                <Grid container className={classes.text1}>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>React Js</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>
                      Javascript
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>HTML</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>CSS</Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.text1}>
                  <Grid item xs={4}>
                    <Typography className={classes.text2}>
                      SASS
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.text2}>
                      React Router
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.text2}>React Redux</Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.text1}>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Leaflet</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Swiper Js</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Emails Js</Typography>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} className={classes.item2}>
            <Card className={classes.card}>
              <Typography
                className={classes.text3}
                gutterBottom
                variant="subtitle1"
              >
                Back-end Development
              </Typography>
              <Typography gutterBottom variant="body1">
                El desarrollo back-end es utilizado para referirse al área
                lógica de toda la página web, la cual se encarga de la
                funcionalidad del sitio, la seguridad y la optimización de los
                recursos.
              </Typography>
              <div className={classes.progress}>
                <div className="pro_34" />
              </div>
              <div className={classes.contText}>
                <Grid container className={classes.text1}>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Node Js</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Express</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>Axios</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.text2}>API REST</Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.text1}>
                  <Grid item xs={4}>
                    <Typography className={classes.text2}>JSON</Typography>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
