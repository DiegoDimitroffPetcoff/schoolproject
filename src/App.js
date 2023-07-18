import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./containers/homePageContainer";
import Login from "./routes/login";
import Register from "./routes/register";
import WhoWeAre from "./routes/whoWeAre";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/whoweare" element={<WhoWeAre/>} />
      </Routes>
    </div>
  );
}

export default App;
