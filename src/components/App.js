import React from "react";

// REACT-REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENTS
import Header from "./Header";
import Login from "./Login";
import Logout from "./Logout";
import Hero from "./Hero";
import SectionQuality from "./SectionQuality";
import SectionProducts from "./SectionProducts";
import SectionAbout from "./SectionAbout";
import SectionCTA from "./SectionCTA";
import Footer from "./Footer";

// CSS
import "../css/App.css";

function App() {
  const sectionWholesale = {
    title: "Own a martial arts club?",
    text: [
      `Take advantage of our wholesale prices.`,
      ` Our wholesale prices are available to club head instructors only.`,
    ],
    contentType: "wholesale",
    link: "https://arawaza.com/wholesale/",
    linkText: "Apply for wholesale",
  };

  const sectionArawazaStore = {
    title: "Find an arawaza store near you",
    text: [`Over 60 locations all over the world.`],
    contentType: "arawazaStore",
    link: "https://arawaza.com/find-a-store/",
    linkText: "Find an arawaza store",
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Hero />
        <SectionQuality />
        <SectionProducts />
        <SectionCTA
          title={sectionWholesale.title}
          text={sectionWholesale.text}
          contentType={sectionWholesale.contentType}
          link={sectionWholesale.link}
          linkText={sectionWholesale.linkText}
        />
        <SectionAbout />
        <SectionCTA
          title={sectionArawazaStore.title}
          text={sectionArawazaStore.text}
          contentType={sectionArawazaStore.contentType}
          link={sectionArawazaStore.link}
          linkText={sectionArawazaStore.linkText}
        />
        {/*<button onClick={auth}>Sign In with Google</button>*/}
        <Login />
        <Logout />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
