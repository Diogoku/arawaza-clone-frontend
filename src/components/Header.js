import React, { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";

// CSS
import "../css/header.css";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: "#171717",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.user) {
          console.log(response);
          setUser(response.data.user);
        } else {
          console.log(response);
          console.log("failed to authenticate user");
          setUser("");
        }
        //if (response.status === 200) return response.json();
      })
      .catch((error) => {
        setUser("");
        console.log(error);
      });
  }, []);

  const auth = (e) => {
    e.preventDefault();
    if (user)
      window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    else {
      window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
    }
  };

  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  // PRODUCTS MENU ON RESPONSIVE MODE
  const [open, setOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const items = [
    "On Sale",
    "Find A Store",
    "Videos",
    "About Us",
    "Login With Google",
    "Wholesale",
    "EN",
  ];

  const productItems = [
    "Martial arts",
    "Training gear",
    "Clothing/Apparel",
    "Acessories/Ohter",
    "Promotions",
  ];

  const openProductsMenu = () => {
    setOpen(!open);
  };

  const list = (anchor) => (
    <div
      role="presentation"
      /*
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}*/
      className="responsiveMenu"
    >
      <List>
        <ListItem button className="a">
          <ListItemText>Pesquisa</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={openProductsMenu}>
          <ListItemText primary="Products" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {productItems.map((productItem) => (
              <ListItem
                key={productItem}
                button
                divider={true}
                className={classes.nested}
              >
                <ListItemText primary={productItem} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        {items.map((text, index) => (
          <ListItem key={text} button divider={true}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="header">
      <div className="header__left">
        <ul className="header__leftList">
          <li className="header__leftItem">
            <a href="#">Products</a>
          </li>
          <li className="header__leftItem">
            <a href="#">On Sale</a>
          </li>
          <li className="header__leftItem">
            <a href="#">Find a Store</a>
          </li>
          <li className="header__leftItem">
            <a href="#">Videos</a>
          </li>
          <li className="header__leftItem">
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <img
        src="https://arawaza.com/wp-content/uploads/2019/10/arawaza-martial-arts-equipment-logo.png"
        alt="Arawaza Header Logo"
      />
      <div className="header__right">
        <ul className="header__rightList">
          <li className="header__rightItem">
            <a href="#">Home</a>
          </li>
          <li className="header__rightItem" onClick={auth}>
            {!user ? <a href="#">Login with Google</a> : <a href="#">Logout</a>}
          </li>
          <li className="header__rightItem">
            <a href="#">Wholesale</a>
          </li>
          <li className="header__rightItem">
            <a href="#">EN</a>
          </li>
          <li className="header__rightItem">
            <a href="#">
              <SearchIcon />
            </a>
          </li>
          {user ? (
            <li className="header__rightItem responsive">
              <Chip
                avatar={<Avatar alt={user.name} src={user.profileImageUrl} />}
                label={user.name}
              />
            </li>
          ) : null}
          <li className="header__rightItem responsive">
            <a href="#">
              <Badge
                badgeContent={0}
                showZero
                max={99}
                color="secondary"
                className="badget"
              >
                <ShoppingBasketIcon />
              </Badge>
            </a>
          </li>
          <li className="header__rightItem responsive">
            <div className="header__menuResponsiveWrapper">
              <Button onClick={toggleDrawer("left", true)}>
                <MenuIcon className="header__menuResponsive" />
              </Button>
            </div>
          </li>
        </ul>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
