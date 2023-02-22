import "./App.css";
import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavLink className="nav-links" to="/">
            Homepage
          </NavLink>
          <NavLink className="nav-links" to="/contact">
            Contact
          </NavLink>
        </div>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
