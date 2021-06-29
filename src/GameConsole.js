export default class Game {
    constructor() {
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
        // and puts something in here
        // defines the position
        this.board[i] = this.turn;

    }

}

