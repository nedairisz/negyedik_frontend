
import './App.css';
import Kereso from './components/Kereso';
import Megjelenito from './components/Megjelenito';
import Receptek from './components/Receptek';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Receptek</h1>
      </header>
      <article>
        
        <Receptek/>
        
      </article>
    </div>
  );
}

export default App;
