import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/organism/NavBar/NavBar";
import TrustpilotBar from "./components/organism/TrustpilotBar/TrustpilotBar";

// pages

import SimOnly from "./pages/SimOnly/SimOnly";
import Prepaid from "./pages/Prepaid/Prepaid";
import Service from "./pages/Service/Service";
import Phone from "./pages/Phones/Phone";
import Cat from "./pages/Cat/Cat";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <TrustpilotBar />
        <section>
          <Routes>
            <Route path="simonly" element={<SimOnly />} />
            <Route path="/" element={<Home />} />
            <Route path="prepaid" element={<Prepaid />} />
            <Route path="service" element={<Service />} />
            <Route path="phone" element={<Phone />} />
            <Route path="cat" element={<Cat />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
