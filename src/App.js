import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";

import "./App.css";

import HomePage from "./containers/homePageContainer";
import Login from "./routes/login";
import Register from "./routes/register";
import WhoWeAre from "./routes/whoWeAre";
import Dashboard from "./routes/dashboard";

import AuthContext from "./contexts/authContext";


function App() {
  const  [logged, setLogged] = useState(false)
  const  [adm, setAdm] = useState(true)
  return (
    <><AuthContext.Provider value={{logged,setLogged,adm, setAdm}}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/whoweare" element={<WhoWeAre/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
