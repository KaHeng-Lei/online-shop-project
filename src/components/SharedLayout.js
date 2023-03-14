import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/Footer";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
