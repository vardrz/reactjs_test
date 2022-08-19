// import logo from './logo.svg';
import './App.css';

import Profile from "./components/Profile"
// React Component
function App() {
  const profile = [
    {
      id: 1,
      name: "Farid",
      hobi: "Tidur"
    },
    {
      id: 2,
      name: "Havertz",
      hobi: "Belajar"
    }
  ];
  // JSX : Syntactical Sugar for HTML
  return (
    <div className="App">
      <h1>Belajar React.js</h1>
      <hr />

      {
        profile.map(profile => {
          const {id, name, hobi} = profile
          return (
            <Profile key={id} name={name} hobi={hobi}></Profile>
          )
        })
      }
      
    </div>
  );
}

export default App;
