// import logo from './logo.svg';
import './App.css';
import PokeSearchPage from './pages/PokeSearch.jsx';

function App() {
  return (
    <div className="App">
      <header id="47455" className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <p>
          PokeParty builder in
          <span
            style={{ fontWeight: "600", color: "#61dafb" }}
            className="reactText"
          > React
          </span>
          <br /> (with friends.)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "16px" }}
        >
          Link to the React site for some starting information!
        </a>
      </header>
      <PokeSearchPage />
    </div>
  );
}

export default App;