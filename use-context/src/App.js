import "./App.css";
import React, { useState } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import { UserContext } from "./Context/UserContext";

function App() {
  const [user, setUser] = useState("");

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
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
