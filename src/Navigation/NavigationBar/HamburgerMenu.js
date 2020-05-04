import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { title: "Hem", path: "/" },
          { title: "Utbud", path: "/activities" },
          { title: "Boka", path: "/booking" },
          { title: "Schema", path: "/" },
          { title: "Priser", path: "/" },
          { title: "Om oss", path: "/about" },
          { title: "Vill du synas här?", path: "/join" },
        ].map((item) => (
          <ListItem button component="a" href={item.path} key={item.title}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>

    /*    <List>
        {[
          { title: "Hem", path: "/", component: { Home } },
          { title: "Boka", path: "/booking", component: { Booking } },
          { title: "Schema", path: "/activities", component: { Activities } },
          { title: "Om oss", path: "/about", component: { About } },
          { title: "Vill du synas här?", path: "/join", component: { Join } },
          { title: "Priser", path: "/", component: { Login } },
        ].map((title, path,component) => (
          <ListItem
            button
            component={component}
            href= {path}
            key={title}
          ></ListItem>*/
  );

  return (
    <div>
      <React.Fragment key={"top"}>
        <Button onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
