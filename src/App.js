import React, { Component } from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GameSpace from "./components/GameSpace";
import MonsterCard from "./components/MonsterCard";
import Footer from "./components/Footer";
import monsters from "./monsters.json";
import './App.css';

class App extends Component {

  state = {
    score: 0,
    high_score: 0,
    monsters: monsters,
    currentMonster: {}
  };

  reset = () => {
    //this will iterate through monsters and reset all the 'clicked' to 'false'
    this.state.monsters.forEach((monster) => (
      monster.clicked = false
    ));
    this.setState({
      score: 0
    });
  };

  sort = () => {
    this.state.monsters.sort(() => Math.random() - 0.70);
  }

  handleClick = id => {

    const foundMonster = this.state.monsters.find((monster) => monster.id === id);
    console.log(foundMonster);
    this.setState({ currentMonster: foundMonster })
    if (foundMonster.clicked === false) {
      foundMonster.clicked = true;
      this.sort();
      if (this.state.score + 1 > this.state.high_score) {
        if (this.state.score + 1 === 12) {
          foundMonster.heroImage = "https://res.cloudinary.com/lmn/image/upload/e_sharpen:150,f_auto,fl_lossy,q_80/v1/gameskinnyc/q/u/e/quest-clear-redbubble-682ed.jpg";
          this.setState({
            currentMonster: foundMonster
          });
        }
        this.setState({
          score: this.state.score + 1,
          high_score: this.state.high_score + 1
        });
      }
      else {
        this.setState({
          score: this.state.score + 1
        });
      }
    }
    else {
      foundMonster.heroImage = "https://www.nicepng.com/png/full/183-1836148_guild-stamp-of-disapproval-monster-hunter-world-quest.png";
      this.setState({
        currentMonster: foundMonster
      })
      this.sort();
      this.reset();
    }
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} high_score={this.state.high_score} />
        <Hero src={this.state.currentMonster.heroImage || "https://i.redd.it/diihdl111ln01.png"} name = {this.state.currentMonster.name} />
        <GameSpace>
          {this.state.monsters.map((monster) => (
            <MonsterCard
              id={monster.id}
              key={monster.id}
              name={monster.name}
              image={monster.image}
              click={this.handleClick}
            />
          ))}
        </GameSpace>
        <Footer />
      </div>
    );
  }
}

export default App;