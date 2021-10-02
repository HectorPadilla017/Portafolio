import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import CV from "../img/CV Hector.pdf?#toolbar=0&navpanes=0&scrollbar=0&zoom=65%";
import img from "../img/Cod.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: "20",
  },
  content: {
    zIndex: "20",
    padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 10, 5, 10),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 1, 5),
    },
  },
  card: {
    position: "relative",
    maxWidth: "350px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  img: {
    objectFit: "cover",
  },
  grid1: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2, 0),
    },
  },
  title: {
    textAlign: "left",
    color: "#012340",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  textBox: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "justify",
  },
  button: {
    color: "#fff",
    fontWeight: "bold",
    borderColor: "#05F2DB",
    marginTop: theme.spacing(4),
    boxShadow: "0 0 40px 40px #05F2DB inset, 0 0 0 0 #05F2DB",
    transition: "all 150ms ease-in-out",
    "&:hover": {
      color: "#05F2DB",
      boxShadow: "0 0 10px 0 #05F2DB inset, 0 0 10px 4px #05F2DB",
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Sobre_mí">
      <div className={classes.content}>
        <Grid container>
          <Grid item md={6} sm={12} className={classes.grid1}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.img}
                component="img"
                alt="Desarrollo Web"
                image={img}
                title="Desarrollo Web"
              />
            </Card>
          </Grid>
          <Grid item md={6} sm={12} className={classes.grid2}>
            <Typography className={classes.title} variant="h3" color="inherit">
              Sobre mí
            </Typography>
            <br />
            <div className={classes.textBox}>
              <Typography variant="subtitle1" color="inherit">
                Mi nombre es Héctor y soy desarrollador web freelance.
                Aprendiendo continuamente nuevas habilidades en el campo de la
                programacion y las futuras demanas tecnologicas. <br />
                <br />
                Me dedico a crear, actualizar, diseñar y mantener paginas web
                del lado del cliente y en el servidor.
              </Typography>
              <Button
                className={classes.button}
                size="large"
                component={Link}
                href={CV}
                download="CV Hector"
              >
                Descargar CV
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMe;
