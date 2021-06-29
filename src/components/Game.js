import React, {useEffect} from 'react';
import "./styles/Game.css";
import GameConsole from "../../src/GameConsole.js";
import GameView from "../GameView.js";
const Game = () => {

        let game = new GameConsole();
        console.log(game.board);
        game.makeMove(3);
        console.log(game.board);
        game.makeMove(8);
        console.log(game.board);

        let gameView = new GameView();
        gameView.updateBoard(game);


    return (
        <div className="game">
            <div className="header">
                <div className="player-x">
                    <span>Player X</span>
                </div>

                <div className="player-o">
                    <span>Player 0</span>
                </div>
            </div>
            <div className="board">
                <div className="board-tile">X</div>
                <div className="board-tile">0</div>
                <div className="board-tile">X</div>
                <div className="board-tile">0</div>
                <div className="board-tile">X</div>
                <div className="board-tile">0</div>
                <div className="board-tile">X</div>
                <div className="board-tile">0</div>
                <div className="board-tile">X</div>
            </div>
        </div>
    );
};

export default Game;
