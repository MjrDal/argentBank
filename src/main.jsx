import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Hearder/Header.jsx";
import { Home } from "./pages/Home/home.jsx";
import { Login } from "./pages/Login/login.jsx";
import { Private } from "./pages/Private/Private.jsx";
import { PrivateHome } from "./pages/Private/PrivateHome/PrivateHome.jsx";
import store from "./store";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />}>
            <Route path="/private/private-home" element={<PrivateHome />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
