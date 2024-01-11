import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegisterPage from "./components/register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<App />}>
            <Route path="register" component={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
