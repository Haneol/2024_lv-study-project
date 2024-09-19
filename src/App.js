import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./pages/home/HomeComp";

import ShopList from "./pages/shopList/ShopList";
import ShopListFamily from "./pages/shopList/ShopListFamily";
import ShopListMan from "./pages/shopList/ShopListMan";
import ShopListWoman from "./pages/shopList/ShopListWoman";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/notFound/NotFound";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomeComp />}></Route>
        <Route path="/shopList/special" element={<ShopList />}></Route>
        <Route path="/shopList/family" element={<ShopListFamily />}></Route>
        <Route path="/shopList/men" element={<ShopListMan />}></Route>
        <Route path="/shopList/women" element={<ShopListWoman />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
