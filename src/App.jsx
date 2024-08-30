import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Store from "./pages/Store"; // Store sayfasını import ediyoruz

const App = () => {
  return (
    <main className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          {/* Ana Sayfa */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlights />
                <Model />
                <Features />
                <HowItWorks />
              </>
            }
          />
          {/* Store Sayfası */}
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
