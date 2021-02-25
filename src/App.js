import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My Heading {2+3}</h1>
        <h2>Math {(2+3)*6+65}</h2>
       <p>My first react paragraph</p>
       <h2 style={{backgroundColor: 'cyan', color:'yellow'}}>{person.name + " " + person.job}</h2>
       <h2>{person2.name + " " + person2.job}</h2>
      </header>
    </div>
  );
}

export default App;
