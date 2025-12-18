import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="all-project-file">
      <div className="project-list">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
