import Home from "./components/Home";
import Products from "./components/Products";

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">


      <Link to='/'>Inicio</Link>
      <Link to='/products'>Productos</Link>
      <Link to='/categories'>Categorias</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
