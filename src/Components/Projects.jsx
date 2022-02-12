import React from "react";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import CFN from "../img/PortadaCFN.jpg";
import Tienda from "../img/PortadaTienda.jpg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: " relative",
  },
  content: {
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
    color: "#012340",
  },
  divider: {
    maxWidth: "450px",
    height: "2px",
    marginTop: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#012340",
  },
  cont: {
    // dislpay: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: theme.spacing(8),
    // margin: "0 auto",
  },
  cardaction: {
    // maxWidth: "500px",
    // margin: "0px"
    // marginLeft: "8px",
    // marginRight: "8px",
  },
  card: {
    // maxWidth: '600px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    transition: "all .4s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  img: {
    objectFit: "cover",
  },
  cardcont: {
    zIndex: "10",
  },
  text: {
    fontWeight: "bold",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Proyectos">
      <div className={classes.content}>
        <Typography className={classes.title} variant="h3" color="initial">
          Proyectos
        </Typography>
        <Grid
          container
          className={classes.cont}
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Grid item xs={6}>
            <CardActionArea
              className={classes.cardaction}
              component={Link}
              href="https://cfn.org.mx/"
              target="_blank"
              rel="noopener"
            >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  alt="Centro Familiar para las Naciones Coacalco"
                  image={CFN}
                  title="Centro Familiar para las Naciones Coacalco"
                />
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={6}>
            <CardActionArea
              className={classes.cardaction}
              component={Link}
              href="https://hectorpadilla017.github.io/EcommerceFrontend"
              target="_blank"
              rel="noopener"
            >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  alt="Ecommerce Frontend"
                  image={Tienda}
                  title="Ecommerce Frontend"
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
