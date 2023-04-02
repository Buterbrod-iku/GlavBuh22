import './App.css';
import React from "react";
import Header from "./components/header/header";
import Services from "./components/services/services";
import Price from "./components/price/price";
import Footer from "./components/footer/footer";
import Info from "./components/info/info";



function App() {
  return (
      <div>
          <Header />
          <Services />
          <Info />
          <Price />
          <Footer />
      </div>
);
}

export default App;
