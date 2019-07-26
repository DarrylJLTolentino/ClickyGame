import React from 'react';
import ClickyGame from "./pages/ClickyGame";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <ClickyGame />
      <Footer />
    </div>
  );
}

export default App;
