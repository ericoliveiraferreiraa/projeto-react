// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Basquete from "./pages/Basquete";
import Skate from "./pages/Skate";
import Corrida from "./pages/Corrida";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basquete" element={<Basquete />} />
        <Route path="/skate" element={<Skate />} />
        <Route path="/corrida" element={<Corrida />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;