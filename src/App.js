
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand mx-auto" href="#">TIC TAC TOE</a>
      </nav>
      <div className="App">
        <Game />
      </div>
    </>
  );
}



export default App;
