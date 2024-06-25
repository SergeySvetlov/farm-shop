import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./styled.js";

export default function PageWrapper () {

    return (
        <>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </>
    );
};