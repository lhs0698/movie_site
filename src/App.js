import React from "react";

import Main from "./pages/Main";
import Movie from "./pages/Movie";

//공용 컴포넌트
import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/info" element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
