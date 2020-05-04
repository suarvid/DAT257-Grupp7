import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import "./NavigationBar.css";
import Item from "antd/lib/list/Item";

const useStyles = makeStyles((theme) => ({
  root: {
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
  function xyz(items) {
    return items.map((item) =>
      item.subsections.length <= 0 ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
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
        <ListItem button onClick={handleClick} key={item.title}>
          <ListItemText primary={item.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
          {xyz(item.subsections)}
        </ListItem>
      )
    );
  }

  function xyza(item) {
    return item.subsections.length <= 0 ? (
      <ListItem button component="a" href={item.path} key={item.title}>
        <ListItemText primary={item.title} />
      </ListItem>
    ) : (
      <List>
        <ListItem button onClick={handleClick} key={item.title}>
          <ListItemText primary={item.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {xyz(item.subsections)}
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
            path: "/activities",
            subsections: [
              { title: "Boka", path: "/booking", subsections: [] },
              { title: "Boka", path: "/booking", subsections: [] },
            ],
          },
          { title: "Boka", path: "/booking", subsections: [] },
          { title: "Schema", path: "/", subsections: [] },
          { title: "Priser", path: "/", subsections: [] },
          { title: "Om oss", path: "/about", subsections: [] },
          { title: "Vill du synas här?", path: "/join", subsections: [] },
        ].map((item) => xyza(item))}
      </List>
    </div>
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
      {
        //<Nested/>
      }
    </div>
  );
}
