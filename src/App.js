import './App.css';
import Game from "./components/Game";
import GameConsole from "./GameConsole.js"
import GameView from "./GameView.js";

function App() {

    const restart = (e) => {
        window.location.reload();
        // let game = new GameConsole();
    }
  return (
    <div className="app">
      <div className="wrapper">
          <div className="left">
              <h1>
                  Let's play <br/> the Tic-tac-toe <br/> Game!
              </h1>
          <div className="restart" onClick={restart}>Start a New Game</div>
          </div>


          <div className="right">
                <Game />
          </div>
      </div>
    </div>
  );
}

export default App;
