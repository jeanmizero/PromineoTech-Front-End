
class Card {
    constructor(value, suit) {
      this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
      this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
       
      this.value = value;
      this.suit = suit;
    }
    // Print 52 Cards
    displayCard() {
      return this.values[this.value] + " " + this.suits[this.suit];
    }
  }
  
class Deck {
    constructor() {
      this.cards = [];

      for (let i = 2; i <= 14; i++) {
        for (let j = 0; j <= 3; j++) {
          let card = new Card(i, j);
          this.cards.push(card.displayCard());
        }
      }
      this.shuffleCard(this.cards);
      this.shuffleCard(this.cards);
    }
  
    dealCard() {
      if (this.cards.length === 0) {
        return;
      }
      return this.cards.pop();
    }
  
    shuffleCard() {
      for (let i = 0; i <= 51; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
      return this.cards;
    }
}
  
class Player {
    constructor(name) {
      this.name = name;
      this.wins = 0;
      this.card = [];
      
    }
} 
class Game {
    constructor() {
      const nameOfPlayer1 = prompt("Enter player name 1");
      const nameOfPlayer2 = prompt("Enter player name 2");
      this.deck = new Deck();

      this.player1 = new Player(nameOfPlayer1);
      this.player2 = new Player(nameOfPlayer2);
    }
  
    wins(winner) {
      console.log(`${winner} wins!`);
    }
  
    drawCard(player1Name, player1Card, player2Name, player2Card) {
      console.log(
                `${player1Name} plays ${player1Card} ${player2Name} plays ${player2Card}`);
      
    }

  
    playGame() {
      const cards = this.deck.cards;
      console.log("Start Game!");
      
      while (cards.length >= 2) {
        const player1Card = this.deck.dealCard();
        const player2Card = this.deck.dealCard();
        const player1Name = this.player1.name;
        const player2Name = this.player2.name;

        this.drawCard(player1Name, player1Card, player2Name, player2Card);
        //  Add point to the player
        if (player1Card > player2Card) {
          this.player1.wins++;
          this.wins(this.player1.name);
        } else {
          this.player2.wins++;
          this.wins(this.player2.name);
        }
      }
      const win = this.displayWinner(this.player1, this.player2);

      console.log(`Game is over! ${win} is the winner!`);
    }
  //Show winner 
    displayWinner(player1, player2) {
      if (player1.wins === player2.wins) {
        return "It was a tie!";
      } else {
        return player1.wins > player2.wins ? player1.name : player2.name;
      }
    }
}
  
const game = new Game();
game.playGame();
