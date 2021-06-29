export default class GameView {
    constructor() {
    }

    updateBoard(game) {

        this.updateTurn(game);

        for(let i = 0; i < game.board.length; i++) {
            // this looper per all the board
            // we select all the board tiles, but the one which has index 0
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i];

        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x");
        let player0 = document.querySelector(".player-o");

    }
}