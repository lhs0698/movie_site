import React from "react";

import Main from "./pages/Main";
import Movie from "./pages/Movie";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/info" element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
