import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { Login } from "./views/login/Login";
import { DogList } from "./views/dogs/DogList";
import "./App.css";

const UserLogin = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Login />
    </header>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/dogs" element={<DogList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
