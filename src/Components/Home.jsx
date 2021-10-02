import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from './Contact'

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: theme.palette.background.default,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      <Nav />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact/>
    </Container>
  );
};

export default Home;
