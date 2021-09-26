import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";



export default function App() {
  return (
    <main text-gray-400 bg-gray-900 body-font>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
