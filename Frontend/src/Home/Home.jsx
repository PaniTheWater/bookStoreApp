import React from "react";
import Footer from "../Components/Footer";
import FreeBook from "../Components/FreeBook";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home;
