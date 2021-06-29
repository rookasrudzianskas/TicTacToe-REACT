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
        if(this.board[i]) {
            return;
        }
        this.board[i] = this.turn;
        this.findWinningCombinations();
    }

    findWinningCombinations() {
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ]

        for(const combination of winningCombinations) {
            const [a, b, c] = combination;

            console.log(a);
            console.log(b);
            console.log(c);
        }
    }

}

