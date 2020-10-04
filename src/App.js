import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
