import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import OrderPage from "../pages/order-page/order-page";
import ScrollToTop from "../../util/scroll-to-top.jsx";

import AdvantagesCards from "../../mocks/advantages-cards/advantages-cards";
import Products from "../../mocks/products/products";

import { GlobalStyle } from './styled.js';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
            <Route index element={<MainPage advantages={AdvantagesCards} />} />
            <Route path={AppRoute.ORDER.replace(AppRoute.MAIN, "")} element={<OrderPage products={Products} />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
