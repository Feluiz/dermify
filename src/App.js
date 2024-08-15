import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MainShowcase from "./Components/MainShowcase/MainShowcase";
import Catalog from "./Components/Catalog/Catalog";
import CustomFooter from "./Components/CustomFooter/CustomFooter";

import "./App.css";
import ContactBtn from "./Components/ContactBtn/ContactBtn";

function App() {
  const [backdrop, setBackdrop] = useState(false)
  return (
    <>
      <div className={backdrop ? "backdrop" : ""}></div>
      <div className="full-body">
        <Header />
        <div className="main-header-container">
          <MainShowcase />
        </div>
        <Catalog setBackdrop={setBackdrop}/>
        <ContactBtn />
        <CustomFooter />
      </div>
    </>
  );
}

export default App;
