// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import PartySection from './pages/Party/PokeSearch'
import Users from "./Storage/Users";


function App() {
  
  const [userActive, setUserSlot] = useState('false');
  const ToggleUsersHide = () => {
    if(userActive === false){return setUserSlot(!userActive);};
    setUserSlot(!userActive);
  };

  return (
    <div className="App">
      <header id="47455">
      <button id="LoginButton" onClick={ToggleUsersHide}>Log in</button>
      <section id="UserLogin" className={userActive? 'hide' : ''}>
        <button id="CloseButton" onClick={ToggleUsersHide}>X</button>
        <Users />
      </section>
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
      <PartySection />
    </div>
  );
}

export default App;