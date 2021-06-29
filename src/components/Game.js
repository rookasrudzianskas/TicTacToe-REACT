import React, {useEffect} from 'react';
import "./styles/Game.css";
import GameConsole from "../../src/GameConsole.js";
import GameView from "../GameView.js";
const Game = () => {

        let game = new GameConsole();
        let gameView = new GameView();


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
                <div className="board-tile" data-index="0"></div>
                <div className="board-tile" data-index="1"></div>
                <div className="board-tile" data-index="2"></div>
                <div className="board-tile" data-index="3"></div>
                <div className="board-tile" data-index="4"></div>
                <div className="board-tile" data-index="5"></div>
                <div className="board-tile" data-index="6"></div>
                <div className="board-tile" data-index="7"></div>
                <div className="board-tile" data-index="8"></div>
            </div>
        </div>
    )
};

export default Game;
