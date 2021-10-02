import React from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import Container from "@material-ui/core/Container";

export default function NavBar() {
  
  const show = () => {
    document.getElementById('sidebar').classList.toggle('active');
  }
  return (
    <Container disableGutters maxWidth="xs">
      <Navbar 
      show={show}
      />
      <Drawer
      actionOpen='sidebar'
      show={show}
      />
    </Container>
  );
}
