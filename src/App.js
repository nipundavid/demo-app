import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Freak X</p>
        <a
          className="App-link"
          href="https://www.freakxapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover more games
        </a>
      </header>
    </div>
  );
}

export default App;
