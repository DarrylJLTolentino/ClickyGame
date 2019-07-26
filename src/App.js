import React from 'react';
import ClickyGame from "./pages/ClickyGame";
import Nav from "./components/Nav/index";
import Hero from "./components/Hero/index";
import GameSpace from "./components/GameSpace/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <GameSpace />
      <Footer />
    </div>
  );
}

export default App;
