import './App.css';
import PlayersList from './componement/PlayersList';
import infoplayers from './componement/Players'; // Use 'infoplayers' instead of 'players'

function App() {
  return (
    <div className="App">
       <PlayersList players={infoplayers} />  
    </div>
  );
}

export default App;
