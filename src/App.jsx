import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users"
import './assets/css/app.css';
import SideBar from "./components/SideBar";

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <SideBar />
      <h1>Welcome to GlobalTech</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;