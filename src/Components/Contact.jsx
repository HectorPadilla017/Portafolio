import React from "react";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "auto",
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
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 3, 0, 3),
  },
  copyright: {
    maxHeight: "45px",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(2, 0, 2),
  },
  title: {
    fontFamily: "Elianto",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
  },
  contIcon: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(5, 0, 5),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: theme.spacing(2, 0, 0),
    },
  },
  itemIcon: {
    display: "flex",
  },
  box1: {
    flexDirection: "column",
    marginRight: "500px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "180px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  box2: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  icons1: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    whiteSpace: "nowrap",
    marginRight: "auto",
  },
  icon: {
    color: "#fff",
    padding: theme.spacing(1),
  },
  text: {
    color: "#fff",
    marginLeft: "10px",
  },
  hoverIcon: {
    transition: "all .2s ease-out",
    "&:hover": {
      color: "#05F2DB",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Contacto">
      <div className={classes.col} />
      <div className={classes.content}>
        <Typography className={classes.title} variant="h4" color="inherit">
          Contacto
        </Typography>
        <div className={classes.contIcon}>
          <ListItem className={`${classes.itemIcon} ${classes.box1}`}>
            <div className={classes.icons1}>
              <WhatsAppIcon />
              <Typography className={classes.text} variant="subtitle1">
                (55)1286-3828
              </Typography>
            </div>
            <div className={classes.icons1}>
              <EmailIcon />
              <Typography className={classes.text} variant="subtitle1">
                Ace.hpadilla@gmail.com
              </Typography>
            </div>
          </ListItem>
          <ListItem className={`${classes.itemIcon} ${classes.box2}`}>
            <IconButton
              className={`${classes.icon} ${classes.hoverIcon}`}
              href="https://www.linkedin.com/in/hectorp17/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              className={`${classes.icon} ${classes.hoverIcon}`}
              href="https://github.com/HectorPadilla017"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
          </ListItem>
        </div>
        <div className={classes.copyright}>
          <Typography variant="body2" color="initial">
            @Copyright {new Date().getFullYear()} / Héctor Padilla
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Contact;
