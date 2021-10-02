import React from "react";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

// import AboutMe from "../AboutMe";
import "../../Css/styles.css";
// import logo from '../../../img/Logo1.png'

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const useStyles = makeStyles((theme) => ({
  navBar: {
    position: "fixed",
    flexGrow: 1,
    top: 0,
    right: 0,
    left: 0,
    width: "100%",
    transition: "0.6s",
    padding: "18px 0px",
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
    "&.sticky": {
      padding: "0px 0px",
      backgroundColor: "#fff",
      boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.25)",
    },
    "&.sticky $iconButton": {
      color: "#000",
    },
    "&.sticky $logo": {
      color: "#012340",
    },
    "&.sticky $imgLogo": {
      // color: "#05F2DB",
      // color: "#000",
      // filter: "invert(1) sepia(1)",
    },
    "&.sticky $link": {
      color: "#012340",
    },
  },
  grid: {
    justifyContent: "flex-end",
  },
  grid1: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  grid2: {
    display: "flex",
    justifyContent: "flex-end",
  },
  gridContainer: {
    justifyContent: "center",
    display: "flex",
    width: "1500px",
  },
  logo: {
    // textDecoration: "none",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    // color: "#05F2DB",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
    },
  },
  imgLogo: {
    fontFamily: "Elianto",
    fontWeight: "bold",
    transition: "all .2s ease-out",
    // "&:hover": {
    //   color: "#034C8C",
    // },
    // "&:active": {
    //   color: "#05F2DB",
    // },
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: theme.spacing(1),
    marginInline: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginInline: theme.spacing(1),
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  text: {
    transition: "all .2s ease-out",
    "&:hover": {
      color: "#034C8C",
    },
    "&:active": {
      color: "#05F2DB",
    },
  },
  iconButton: {
    color: "white",
  },
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.navBar}>
        <Toolbar className={classes.grid} variant="dense">
          <div className={classes.grid1}>
            <Link className={classes.logo} href="#Inicio">
              <Typography variant="h5" className={classes.imgLogo}>
                HP
              </Typography>
            </Link>
          </div>
          <Hidden smDown>
            <div className={classes.gridContainer}>
              <Link className={classes.link} href="#Inicio">
                <Typography variant="subtitle1" className={classes.text}>
                  Inicio
                </Typography>
              </Link>
              <Link className={classes.link} href="#Sobre_mí">
                <Typography variant="subtitle1" className={classes.text}>
                  Sobre mí
                </Typography>
              </Link>
              <Link className={classes.link} href="#Habilidades">
                <Typography variant="subtitle1" className={classes.text}>
                  Habilidades
                </Typography>
              </Link>
              <Link className={classes.link} href="#Proyectos">
                <Typography variant="subtitle1" className={classes.text}>
                  Proyectos
                </Typography>
              </Link>
              <Link className={classes.link} href="#Contacto">
                <Typography variant="subtitle1" className={classes.text}>
                  Contacto
                </Typography>
              </Link>
            </div>
          </Hidden>
          <div className={classes.grid2}>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                // id="sidebar"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => props.show()}
                // onClick={() => props.actionOpen()}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </header>
    </div>
  );
}
