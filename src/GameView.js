export default class GameView {
    constructor() {
        console.log(" init game view")
    }

    updateBoard(game) {
        console.log("This is a board", game.board);

        for(let i = 0; i < game.board.length; i++) {
            console.log(game.board[i]);
            // this looper per all the board
        }
    }
}