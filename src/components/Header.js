import React, { useState } from "react";

// AXIOS
import axios from "axios";

// REACT-REDUX
import { useDispatch } from "react-redux";
import { login, logout } from "../actions/userActionsCreator";

// REACT GOOGLE OAUTH
import { GoogleLogin, GoogleLogout } from "react-google-login";

// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  // DISPATCH
  const dispatch = useDispatch();

  // USER
  const [user, setUser] = useState("");

  // LOGIN / LOGOUT ALERT MESSAGE
  const [openLoginAlertMessage, setOpenLoginAlertMessage] = useState(false);
  const [openLogoutAlertMessage, setOpenLogoutAlertMessage] = useState(false);

  // OPEN
  const openLoginAlert = () => setOpenLoginAlertMessage(true);
  const openLogoutAlert = () => setOpenLogoutAlertMessage(true);

  // CLOSE
  const closeLoginAlert = () => setOpenLoginAlertMessage(false);
  const closeLogoutAlert = () => setOpenLogoutAlertMessage(false);

  // PRODUCTS MENU ON RESPONSIVE MODE
  const [open, setOpen] = useState(false);

  const openProductsMenu = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
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

  const items = [
    "On Sale",
    "Find A Store",
    "Videos",
    "About Us",
    "Login With Google",
    "Wholesale",
    "EN",
  ];

  const productMenuItems = [
    "Martial arts",
    "Training gear",
    "Clothing/Apparel",
    "Acessories/Ohter",
    "Promotions",
  ];

  const list = (anchor) => (
    <div role="presentation" className="responsiveMenu">
      <List>
        <ListItem button className="a">
          <ListItemText>Pesquisa</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={openProductsMenu}>
          <ListItemText primary="Products" />
          {open ? (
            <ExpandLess className="menuIcon" />
          ) : (
            <ExpandMore className="menuIcon" />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {productMenuItems.map((productItem) => (
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
        <ListItem>
          {!user ? (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogleLogin}
              onFailure={responseGoogleLogin}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : (
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={responseGoogleLogout}
            />
          )}
        </ListItem>
        {items.map((text, index) => (
          <ListItem key={text} button divider={true}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // GOOGLE AUTH RESPONSES
  // GOOGLE AUTH LOGIN RESPONSE
  const responseGoogleLogin = async (response) => {
    const { profileObj } = await response;
    setUser(profileObj);
    openLoginAlert();
    dispatch(login(profileObj));
    axios
      .post("/auth/", {
        name: profileObj.name,
        googleId: profileObj.googleId,
        profileImageUrl: profileObj.imageUrl,
      })
      .catch((err) => console.log(err));
  };

  // GOOGLE AUTH LOGOUT RESPONSE
  const responseGoogleLogout = () => {
    setUser("");
    openLogoutAlert();
    dispatch(logout());
  };

  return (
    <div className="header">
      <Snackbar
        open={openLoginAlertMessage}
        autoHideDuration={6000}
        onClose={closeLoginAlert}
      >
        <Alert onClose={closeLoginAlert} severity="success">
          Login Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openLogoutAlertMessage}
        autoHideDuration={6000}
        onClose={closeLogoutAlert}
      >
        <Alert onClose={closeLogoutAlert} severity="error">
          Logout Successfully!
        </Alert>
      </Snackbar>

      <div className="header__left">
        <ul className="header__leftList">
          <li className="header__leftItem">
            <a href="https://arawaza.com/shop/">Products</a>
          </li>
          <li className="header__leftItem">
            <a href="https://arawaza.com/product-category/on-sale/">On Sale</a>
          </li>
          <li className="header__leftItem">
            <a href="https://arawaza.com/find-a-store/">Find a Store</a>
          </li>
          <li className="header__leftItem">
            <a href="https://arawaza.com/videos/">Videos</a>
          </li>
          <li className="header__leftItem">
            <a href="https://arawaza.com/about-us/">About Us</a>
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
            <button>Home</button>
          </li>
          <li className="header__rightItem">
            <a href="https://arawaza.com/wholesale/">Wholesale</a>
          </li>
          <li className="header__rightItem">
            <button>EN</button>
          </li>
          <li className="header__rightItem">
            <button>
              <SearchIcon />
            </button>
          </li>
          <li className="header__rightItem">
            {!user ? (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogleLogin}
                onFailure={responseGoogleLogin}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : (
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={responseGoogleLogout}
              />
            )}
          </li>
          {user ? (
            <li className="header__rightItem responsive">
              <Chip
                avatar={<Avatar alt={user.name} src={user.imageUrl} />}
                label={user.name}
              />
            </li>
          ) : null}
          <li className="header__rightItem responsive">
            <button>
              <Badge
                badgeContent={0}
                showZero
                max={99}
                color="secondary"
                className="badget"
              >
                <ShoppingBasketIcon />
              </Badge>
            </button>
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
