import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Recettes from "../components/Recettes";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Recettes />
    </div>
  );
};

export default Home;
