import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ClickyGame from "./pages/ClickyGame";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Route exact path = "/" component={ClickyGame}/>
      <Footer />
    </div>
  );
}

export default App;
