import React from "react";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "250px",
    height: "100vh",
    top: "0",
    right: "-250px",
    color: "#fff",
    zIndex: 101,
    transition: "all .5s ease",
    background: "rgba(3, 76, 140, 0.8)",
    background:
      "linear-gradient(120deg, rgba(1, 35, 64, 0.8) 4%, rgba(3, 76, 140, 0.8) 50%, rgba(1, 35, 64, 0.8) 96%)",
    background:
      "-webkit-linear-gradient(120deg, rgba(1, 35, 64, 0.8) 4%, rgba(3, 76, 140, 0.8) 50%, rgba(1, 35, 64, 0.8) 96%)",
    backdropFilter: "blur(20px)",
    "&.active": {
      right: "0",
    },
  },
  img: {
    display: "block",
    width: "100px",
    margin: "auto",
    marginTop: "5px",
    marginBottom: "5px",
  },
  icon: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  color: {
    color: "#fff",
    fontWeight: "600",
  },
  divider: {
    background: "rgba(255,255,255, 0.2)",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
  },
  link: {
    color: "#fff",
    marginTop: "8px",
    marginBottom: "8px",
    "&:hover": {
      textDecoration: "none",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Cajon = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="sidebar">
      <List>
        <IconButton
          className={classes.iconButton}
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => props.show()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Divider className={classes.divider} />
        <ListItem className={classes.links}>
          <Link
            className={classes.link}
            href="#Inicio"
            onClick={() => props.show()}
          >
            <Typography variant="subtitle1" className={classes.color}>
              Inicio
            </Typography>
          </Link>
          <Link
            className={classes.link}
            href="#Sobre_mí"
            onClick={() => props.show()}
          >
            <Typography variant="subtitle1" className={classes.color}>
              Sobre mí
            </Typography>
          </Link>
          <Link
            className={classes.link}
            href="#Habilidades"
            onClick={() => props.show()}
          >
            <Typography variant="subtitle1" className={classes.color}>
              Habilidades
            </Typography>
          </Link>
          <Link
            className={classes.link}
            href="#Proyectos"
            onClick={() => props.show()}
          >
            <Typography variant="subtitle1" className={classes.color}>
              Proyectos
            </Typography>
          </Link>
          <Link
            className={classes.link}
            href="#Contacto"
            onClick={() => props.show()}
          >
            <Typography variant="subtitle1" className={classes.color}>
              Contacto
            </Typography>
          </Link>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem className={classes.icons}>
          <IconButton
            className={classes.color}
            href="https://www.linkedin.com/in/hectorp17/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            className={classes.color}
            href="https://github.com/HectorPadilla017"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </ListItem>
        <Divider className={classes.divider} />
      </List>
    </div>
  );
};

export default Cajon;
