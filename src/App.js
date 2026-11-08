import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Posts from "./pages/posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Posts />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
