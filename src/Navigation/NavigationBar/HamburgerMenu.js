import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import "./NavigationBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "120px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  fullList: {
    width: "auto",
  },
}));
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
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
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  function createSubListItems(items, click) {
    let localOpen;
    if (click === handleClick1) {
      localOpen = open1;
    } else {
      localOpen = open;
    }
    return items.map((item) =>
      item.subsections.length <= 0 ? (
        <Collapse in={localOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component="a"
              href={item.path}
              key={item.title}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          </List>
        </Collapse>
      ) : (
        <ListItem button onClick={click} key={item.title}>
          <ListItemText primary={item.title} />
          {localOpen ? <ExpandLess /> : <ExpandMore />}
          {createSubListItems(item.subsections)}
        </ListItem>
      )
    );
  }

  function createListItems(item) {
    let click;
    let localopen;
    if (item.title === "Utbud") {
      click = handleClick1;
      localopen = open1;
    } else {
      click = handleClick;
      localopen = open;
    }
    return item.subsections.length <= 0 ? (
      <ListItem button component="a" href={item.path} key={item.title}>
        <ListItemText primary={item.title} />
      </ListItem>
    ) : (
      <List>
        <ListItem button onClick={click} key={item.title}>
          <ListItemText primary={item.title} />
          {localopen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {createSubListItems(item.subsections, click)}
      </List>
    );
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List className={classes.root}>
        {[
          { title: "Hem", path: "/", subsections: [] },
          {
            title: "Utbud",
            path: "/",
            subsections: [
              { title: "Träning", path: "/aktiviteter", subsections: [] },
              { title: "Föreläsningar", path: "/föreläsningar", subsections: [] },
              { title: "Workshops", path: "/workshops", subsections: [] },
              { title: "Erbjudanden", path: "/erbjudanden", subsections: [] },
            ],
          },
          { title: "Boka", path: "/boka", subsections: [] },
          { title: "Schema", path: "/schema", subsections: [] },
          { title: "Priser", path: "/priser", subsections: [] },
          {
            title: "Om oss",
            path: "/",
            subsections: [
              { title: "Företagarna", path: "/om oss", subsections: [] },
              { title: "Inspiratörer", path: "/inspiratörer", subsections: [] },
            ],
          },
          { title: "Vill du synas här?", path: "/gå med", subsections: [] },
        ].map((item) => createListItems(item))}
      </List>
    </div>
  );

  return (
    <div style={{ position: "fixed", top: "85px" ,zIndex:100}}>
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
      {
        //<Nested/>
      }
    </div>
  );
}
