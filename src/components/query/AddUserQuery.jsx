import React, { useEffect } from "react";
import { useAddUserData } from "./userService";

export const AddUserQuery = () => {
  const { isLoading, isIdle, data, isError, mutate } = useAddUserData();
  useEffect(() => {
    
    console.log("data", data);
    console.log("isError", isError);
    console.log("isLoading", isLoading);
    console.log("isIdle", isIdle);
    
  }, [isIdle,isLoading])
  
  const addUser = async () => {

    const user = {
        name:"amit",
        email:"amit@gmail.com",
        age:23,
        isActive:true
    }
    mutate(user);
    
  }
  return (
    <div>
      <h1>ADD USER</h1>
      <button onClick={()=>{addUser()}}>Add User</button>
    </div>
  );
};
