import React, { useState } from "react";

export const UserReg = (props) => {
  // var user = {
  //     id:4,
  //     name:"ram",
  //     age:23,
  //     email:"ram@gmail.com"
  // }

  const [id, setid] = useState()
  const [name, setname] = useState("")

  const idHandler = (event)=>{
      console.log(event);
      console.log(event.target.value)
      setid(event.target.value)
  }

  const submitHandler  = (event)=>{

      event.preventDefault(); // to prevent the default behaviour of the form
      console.log("submit handler called");
      console.log(id);
      console.log(name);
      //props.addUser({id:id,name:name})

  }

  return (
    <div>
      <h1>ADD USER component</h1>
      <form onSubmit={(event)=>{submitHandler(event)}}>
    <div>
        <label>Id</label>
        <input type="text" onChange={(e)=>{idHandler(e)}}></input>
        {id}
    </div>
    <div>

        <label>Name</label>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
    </div>
    <input type="submit" value="submit"></input>
      </form>

      {/* <button onClick={()=>{props.addUser(user)}} className = "btn btn-primary">ADD</button> */}
    </div>
  );
};
