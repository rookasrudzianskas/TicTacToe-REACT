import React, {useEffect} from 'react';
import "./styles/Game.css";
import GameConsole from "../../src/GameConsole.js";

const Game = () => {

    useEffect(() =>  {
        let game = new GameConsole();
        console.log("My turn is", game.turn);
    }, []);


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
