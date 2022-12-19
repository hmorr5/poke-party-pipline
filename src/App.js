// import logo from './logo.svg';
import './App.css';
import PokeSearchPage from './pages/PokeSearch';
import { getByDisplayValue } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header id="47455" className="App-header">
        <p>
          PokeParty builder in 
            <span 
              style={{fontWeight:"600", color:"#61dafb"}}
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
          style={{fontSize:"16px"}}
        >
          Link to the React site for some starting information!
        </a>
      </header>
      <PokeSearchPage />
    </div>
  );
}

export default App;