import logo from './logo.svg';
import './App.css';
import TwitterFinder from './TwitterFinder.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit232 <code>src/App.js</code> and save to reload.
        </p>
      </header>
			<TwitterFinder />
    </div>
  );
}

export default App;
