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
    wins: 0,
    loses: 0,
    monsters: monsters,
    currentMonster: {},
    lossImage: "",
    slainMessage: ""
  };

  reset = () => {
    //this will iterate through monsters and reset all the 'clicked' to 'false'
    this.state.monsters.forEach((monster) => (
      monster.clicked = false
    ));
    this.setState({
      score: 0,
      currentMonster: {},
      lossImage: "https://www.nicepng.com/png/full/183-1836148_guild-stamp-of-disapproval-monster-hunter-world-quest.png",
      slainMessage: ""
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
            currentMonster: foundMonster,
            wins: this.state.wins + 1,
            lossImage: ""
          });
        }
        this.setState({
          score: this.state.score + 1,
          high_score: this.state.high_score + 1,
          slainMessage: `You have slain the mighty ${foundMonster.name}! Choose another monster to slay!`
        });
      }
      else {
        this.setState({
          score: this.state.score + 1,
          slainMessage: `You have slain the mighty ${foundMonster.name}! Choose another monster to slay!`
        });
      }
    }
    else {
      this.setState({
        currentMonster: foundMonster,
        loses: this.state.loses + 1,
        slainMessage: "You can't slay the same monster twice! Try again"
      })
      this.sort();
      this.reset();
    }
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} high_score={this.state.high_score} wins = {this.state.wins} loses = {this.state.loses} />
        <Hero src={this.state.currentMonster.heroImage || this.state.lossImage || "https://i.redd.it/diihdl111ln01.png"} name = {this.state.slainMessage || "Click on an image to slay the monster! Don't click the same monster or you lose!"} />
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