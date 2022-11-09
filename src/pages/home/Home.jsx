import React from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testemonial from "../../components/Testemonial";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testemonial />
    </>
  );
};

export default Home;
