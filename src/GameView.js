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

            // we will add these classes to the individual letters
            let tileType = game.board[i] === 'X' ? "tile-x" : 'tile-0';

            tile.innerHTML = `<span class="${tileType}">${game.board[i]}</span>`
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x");
        let player0 = document.querySelector(".player-o");

        if(game.turn === "X") {
            player0.classList.remove('active');
            playerX.classList.add('active');
        } else {
            playerX.classList.remove('active');
            player0.classList.add('active');
        }



    }
}