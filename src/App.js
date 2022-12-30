// import logo from './logo.svg';
import './App.css';
import Content01 from './pages/PokeSearch'
import Users from "./Storage/Users";
import GetUsers from "./Storage/Users";

function App() {

  return (
    <div className="App">
      <header id="47455">
        <p>
          Working with
          <span
            style={{ fontWeight: "600", color: "#61dafb" }}
            className="reactText"
          > React! </span>
          <br /> and programming
        </p>
        <Users />

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
      <Content01 />
    </div>
  );
}

export default App;