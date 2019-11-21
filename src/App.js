import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BeerForm from "./pages/BeerForm";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BeerForm />
      <Footer />
    </>
  );
}

export default App;
