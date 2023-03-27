import React from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

import "./scss/app.scss";

export const SearchContext = React.createContext("");


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home searchValue={searchValue} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
