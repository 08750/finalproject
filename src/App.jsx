import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/_header/Header";
import Footer from "./components/_footer/Footer";

import Topmain from "./components/_top/Topmain";
import AboutMain from "./components/_about/Aboutmain";
import Menumain from "./components/_menu/Menumain";
import Qamain from "./components/_q&a/Qamain";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Topmain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/menu" element={<Menumain />} />
        <Route path="/QA" element={<Qamain />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
