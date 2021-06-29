export default class Game {
    constructor() {
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
        // console.log(this.board)

    }
    nextTurn() {
        if(this.turn === "X") {
            this.turn = "0"
        } else {
            this.turn = "X"
        }
    }

    makeMove(i) {
        // defines the position
        this.board[i] = this.turn;

    }

}

