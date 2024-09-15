import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import FreeBook from "../Component/FreeBook";
import Footer from "../Component/Footer";
import Course from "../Component/Course";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBook></FreeBook>
      <Footer></Footer>
    </>
  );
}
