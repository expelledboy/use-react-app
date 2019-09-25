import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

export interface ISideBar {
  /** View status of sidebar */
  open: boolean;
  /** Optional: see https://www.styled-components.com/docs/api#caveat-with-classname */
  className?: string;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
);

const SideBar: FC<ISideBar> = ({ children, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <List>{children}</List>
    </Drawer>
  );
};

export default SideBar;
