import React, { useState } from "react";
import { UserReg } from "./UserReg";
import { UsersList } from "./UsersList";

export const Users = (props) => {
  //var count = 0
  //var name ="";
  //var users = {}
  //setCount function ==> const setCount = ()=>{}
  //f
  var [count, setCount] = useState(0);
  // const [name, setname] = useState("")
  // const [user, setuser] = useState({})

  const increment = () => {
    //count = count + 1;
    setCount(count + 1);
  };

  // var users = [
  //   {
  //     id: 1,
  //     name: "amit",
  //     email: "amit@gmail.com",
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     name: "raj",
  //     email: "raj@gmail.com",
  //     age: 24,
  //   },
  //   {
  //     id: 3,
  //     name: "akshit",
  //     email: "akshit@gmail.com",
  //     age: 24,
  //   },
  // ];

  var [users, setusers] = useState([
    {
      id: 1,
      name: "amit",
      email: "amit@gmail.com",
      age: 23,
    },
    {
      id: 2,
      name: "raj",
      email: "raj@gmail.com",
      age: 24,
    },
    {
      id: 3,
      name: "akshit",
      email: "akshit@gmail.com",
      age: 24,
    },
  ]);

  const test = (name) => {
    alert("test " + name);
  };

  const deleteUser = (id) => {
    console.log("delete user", id);
    console.log("before delete...users", users);
    //id =3
    users = users.filter((u) => {
      //1!==3
      //2!==3
      //3!==3
      return u.id !== id;
    });

    console.log("after delete...users", users);
    //useState update...
    setusers(users);
  };

  const addUser = (user) => {
    console.log("add user", user);
    //push...
    // users = users.push(user);
    // setusers(users);
    //spread operator

    users = [...users,user]
    console.log("after add...users", users);
    setusers(users);
  };

  return (
    <div>
      {/* <h1>Count -- {count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button> */}
      {/* <h1>USERS -- {props.title}</h1> */}
      {/* <button onClick={()=>{test()}}>Test</button> */}
      <UserReg addUser={addUser}></UserReg>
      <br></br>
      <br></br>
      <br></br>
      {/* <UsersList
        users={users}
        title={props.title}
        test={test}
        deleteUser={deleteUser}
      /> */}
    </div>
  );
};
