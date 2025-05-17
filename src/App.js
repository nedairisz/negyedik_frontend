import logo from './logo.svg';
import './App.css';
import Kereso from './components/Kereso';
import Receptek from './components/Receptek';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Receptek</h1>
      </header>
      <article>
        <Kereso/>
        <Receptek/>
      </article>
    </div>
  );
}

export default App;
