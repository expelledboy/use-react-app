import React, { FC, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface IHeader {
  /** Page title */
  title: string;
  toggleMenu: () => any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header: FC<IHeader> = ({ children, title, toggleMenu }) => {
  const classes = useStyles();

  const handleMenuButton = useCallback(toggleMenu, [toggleMenu]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleMenuButton}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
