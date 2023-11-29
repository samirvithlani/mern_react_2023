import logo from "./logo.svg";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Users } from "./components/users/Users";
import "./App.css";

function App() {
  var title = "INDIA";
  var indepndence = "15th August 1947";
  var freedomFighters ={
    "Mg": "Father of the Nation",
    "Bs": "Shaheed",
  }
  const users =[
    {
      id:1,
      name:"Raj",
    },
    {
      id:2,
      name:"Ravi",
    }
  ]

  return (
    <div className="App">
      <Header title={title} ind={indepndence} ff = {freedomFighters}></Header>
      {/* <Home t={title} ind = {indepndence} ff ={freedomFighters} users = {users}></Home> */}
      <Users title = {title}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
