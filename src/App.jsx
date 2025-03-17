import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import InventoryList from "./components/InventoryList.jsx";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryList />} />
      </Routes>
    </Router>
  );
};

export default App;