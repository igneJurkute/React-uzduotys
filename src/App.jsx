import './App.css';
import Rb1 from './Components/Rb1';
import Rb2 from './Components/Rb2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rb1></Rb1>
        <h1><Rb2 text="Sveiki" /></h1>
      </header>
    </div>
  );
}

export default App;
