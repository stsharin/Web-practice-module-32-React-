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
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman'];


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="" style={style}>My Heading {2+3}</h1>
        <h2>Math {(2+3)*6+65}</h2>
       <p>My first react paragraph</p>
       <h2 style={{backgroundColor: 'cyan', color:'yellow'}}>{person.name + " " + person.job}</h2>
       <h2>{person2.name + " " + person2.job}</h2>
       
       <PersonInfo name={nayoks[0]} food="Pizza" nayika="Mousumi"></PersonInfo>
       <PersonInfo name="Jasim" nayika="sabana"></PersonInfo>
       <PersonInfo name="Bapparaz" nayika="Cheka" ></PersonInfo>
       <PersonInfo name="Elias K" nayika="Bobita"></PersonInfo>
      </header>
    </div>
  );
}
function PersonInfo(props){
  // console.log(props);
  return (
    <div style={{border:'2px solid red', margin: '10px'}}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
  </div>
  ) 
}

export default App;
