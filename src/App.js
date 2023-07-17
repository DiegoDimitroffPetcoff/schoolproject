import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./containers/homePageContainer";
import Login from "./routes/login";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
