import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-primary text-secondary">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="pt-3">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-accent bg-secondary rounded mt-2 px-2"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
