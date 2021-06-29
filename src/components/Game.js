import React from 'react';
import "./styles/Game.css";

const Game = () => {
    return (
        <div className="game">
            <div className="header">
                <div className="player-x">
                    <span>Player X</span>
                </div>

                <div className="player-o">
                    <span>Player Y</span>
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