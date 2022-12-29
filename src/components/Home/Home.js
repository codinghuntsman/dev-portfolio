import React from "react";
import Navbar from "../../Navbar/Navbar";
import Animation from "../Animation/Animation";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import About from "../../components/About/About";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Information></Information>
      <Animation></Animation>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
