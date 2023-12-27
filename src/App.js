import logo from "./logo.svg";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Users } from "./components/users/Users";
import "./App.css";
import { AddEmployee } from "./components/employee/AddEmployee";
import { AddEmployee1 } from "./components/employee/AddEmployee1";
import { RegisterEmployee } from "./components/employee/RegisterEmployee";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/Netflix/NetflixHome";
import { NetflixMovis } from "./components/Netflix/NetflixMovis";
import { ThrillerMovies } from "./components/Netflix/ThrillerMovies";
import { ComedyMovies } from "./components/Netflix/ComedyMovies";
import { Series } from "./components/Netflix/Series";
import { SeriesDetail } from "./components/Netflix/SeriesDetail";
import { ErrorPage } from "./components/Netflix/ErrorPage";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { ApiDemo2 } from "./components/apis/ApiDemo2";
import { ApiDemo3 } from "./components/apis/ApiDemo3";
import { ApiDemo4 } from "./components/apis/ApiDemo4";
import { ApiDemo5 } from "./components/apis/ApiDemo5";

function App() {
  var title = "INDIA";
  var indepndence = "15th August 1947";
  var freedomFighters = {
    Mg: "Father of the Nation",
    Bs: "Shaheed",
  };
  const users = [
    {
      id: 1,
      name: "Raj",
    },
    {
      id: 2,
      name: "Ravi",
    },
  ];

  return (
    <div className="App">
      {/* <Header title={title} ind={indepndence} ff = {freedomFighters}></Header> */}
      {/* <Home t={title} ind = {indepndence} ff ={freedomFighters} users = {users}></Home> */}
      {/* <Users title = {title}/> */}
      {/* <AddEmployee1/> */}
      {/* <Footer /> */}
      {/* <RegisterEmployee/> */}

      <Navbar />

      <Routes>
        <Route path ="/" element ={<NetflixHome/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovis/>}></Route>
        <Route path="/thrillermovies" element ={<ThrillerMovies/>}></Route>
        <Route path ="/netflixmovies/comedy" element ={<ComedyMovies/>}></Route>
        <Route path ="/series" element = {<Series/>}></Route>
        {/* <Route path= "/series/detail/:id" element ={<SeriesDetail/>}></Route> */}
        <Route path = "/series/detail/:id/:name" element ={<SeriesDetail/>}></Route>
        <Route path ="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path ="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path ="/apidemo3" element={<ApiDemo3/>}></Route>
        <Route path ="/apidemo4" element={<ApiDemo4/>}></Route>
        <Route path ="/apidemo5" element={<ApiDemo5/>}></Route>
        {/* <Route path = "*" element = {<h1>404</h1>}></Route> */}
        <Route path = "*" element = {<ErrorPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
