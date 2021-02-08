import React from "react";
import "./HomePage.css";
import Home from "../Home/Home";
import CashBack from "../CashBack/CashBack";
import PropertyPrice from "../PropertyPrice/PropertyPrice";
import PremiumOffers from "../PremiumOffers/PremiumOffers";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import About from "../About/About";
import Refer from "../Refer/Refer";
import MoveToApp from "../MoveToApp/MoveToApp";
import AppFooter from "../AppFooter/AppFooter";
import topSvg from "../../assets/images/bg-footer-top-desktop.svg";
import Contact from "../Contact/Contact";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="wrapper">
        <Home />
        <PremiumOffers />
        <FeaturedProjects />
        <About />
        <PropertyPrice />
        <CashBack />
        <Refer />
        <MoveToApp />
        <Contact />
        <div className="CashBack__imageTop" style={{ marginBottom: "-2px" }}>
          <img src={topSvg} alt="svg background" />
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

export default HomePage;
