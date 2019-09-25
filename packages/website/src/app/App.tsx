import React, { FC, useState } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import theme from "./theme";
import Header from "./Header";
import SideBar from "./SideBar";
import NavLink from "./NavLink";
import Home from "pages/Home";

const title = "My Cool App";

const App: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={title} toggleMenu={toggleOpen}>
        <Button color="inherit">Login</Button>
      </Header>
      <SideBar open={open}>
        <NavLink icon={InboxIcon} to="/">
          Home
        </NavLink>
        <NavLink icon={InboxIcon} to="dashboard">
          Dashboard
        </NavLink>
      </SideBar>
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
