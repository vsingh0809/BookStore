import React from "react";
import Course from "../Component/Course";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  );
}
