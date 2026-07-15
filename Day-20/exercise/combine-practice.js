const player = {
  name: "Virat",
  score: 53,
  showscore() { // Simplified syntax
    console.log(this.name, this.score);
  },
  updatescore(newScore) {
    this.score = newScore; 
    console.log(`${this.name}'s score updated to: ${this.score}`);
  }
};

player.showscore(); 
player.updatescore(100);
player.showscore(); 
