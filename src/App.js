import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NavbarBar, Footer} from "./component";
import {Home, Search, Detail} from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/search" element={<Search />} exact />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
