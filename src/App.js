import logo from './logo.svg';
import './App.css';

function App() {

  var name ="Kohli"
  var runs = 10000
  var isMarried = true
  var age = 30
  //json...
  var score={
    test:21,
    odi:50,

  }

  return (
    <div className='App'>
      <h1>HELLO ALL....</h1>
      {name}
      <h1>Name = {name}</h1>
      <h1>Runs = {runs}</h1>
      <h1>isMarried = {isMarried == true ? "YES" : "NO"}</h1>
      <h1>ODI score = {score.odi}</h1>
      <h1>Test score = {score.test}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
}

export default App;
