import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {


  const state = useSelector((state)=>state.cart.cart)
  const bankState = useSelector((state)=>state.bank)
  console.log("state...",state)
  console.log("bankState...",bankState)

  const [id, setid] = useState("")
  useEffect(() => {
    
    const localId = localStorage.getItem("id")
    setid(localId)
    
    
  }, [])

  const naviagte = useNavigate()
  const logout= ()=>{
    localStorage.removeItem("id")
    sessionStorage.removeItem("id")

    // localStorage.clear()
    // sessionStorage.clear()
    
    naviagte("/login")

  }
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/netflixhome">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/netflixhome">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/netflixmovies">
              MOVIES
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/series">
              SERIES
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hookdemo">
              hook demo
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link" to="/apidemo1">
              apidemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo2">
              apidemo2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo3">
              apidemo3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo4">
              apidemo4
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo5">
              apidemo5
            </Link>
          </li> */}
          {/* <li class="nav-item">
            <Link class="nav-link" to="/students">
              students
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/popup">
              popup demo
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/content">
              content
            </Link>
          </li> */}
          
          <li class="nav-item">
            <Link class="nav-link" to="/userquery">
            userquery
            </Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link" to="/usemutate">
            usemutate
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/withdraw">
              withdraw
            </Link>
            
          </li>
          BALANCE : {bankState}
          <li class="nav-item">
            <Link class="nav-link" to="/product">
              PRODUCT
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/cart">
              CART
            </Link>
          </li>
          <h1>
          {
             state.length
          }
          </h1>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              login
            </Link>
          </li>
          
          <li class="nav-item">
            
            <button className="nav-link" onClick={()=>{logout()}}>logout</button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
