import RegisterPage from "./components/register";
import "./App.css";
import LoginPage from "./components/LoginPage";

import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LoginPage/>
  );
}

export default App;
