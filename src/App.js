import './App.css';
import Game from "./components/Game";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
          <div className="left">
              <h1>
                  Let's play <br/> the Tic-tac-toe <br/> Game!
              </h1>
          <div className="restart">Start a New Game</div>
          </div>


          <div className="right">
                <Game />
          </div>
      </div>
    </div>
  );
}

export default App;
