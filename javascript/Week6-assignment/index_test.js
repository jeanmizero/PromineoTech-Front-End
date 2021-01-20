const expect = chai.expect;

describe("Card", function(){
    describe("constructor", function(){
        it("should create new card with a name and value", function(){
            let card = new Card("Heart",3,3)
            expect(card.value).to.equal(3)
        })
    })
})
describe("Player", function(){
    describe("constructor", function(){
        it("should enter player name", function(){
            let player = new Player("");
            expect(game.player1.wins).to.be.a("");
        })
    })
}) 
describe("Game", function(){
    describe("displayWinner", function(){
        it("should create a player deck of cards", function(){
            let playGame = new Game;
            playGame.displayWinner(player1, player2);
            expect(playGame.deck.dealCard).to.have.length();
        })
    })
}) 