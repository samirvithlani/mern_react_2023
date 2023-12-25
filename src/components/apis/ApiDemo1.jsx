import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const fetchUserData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.status);
    console.log(res.data);
    setusers(res.data.data);
    setisLoading(false);
  };

  const deleteUser = async (id) => {
    //alert(id)

    const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
    if(res.status == 204){
      //alert("User Deleted Successfully")
      fetchUserData()
    }
  }

  // const fetchUserData = async () => {
  //   axios
  //     .get("https://node5.onrender.com/user/user")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.status);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <h1>GET API DEMO 1</h1>
      <button
        onClick={() => {
          fetchUserData();
        }}
      >
        Fetch User Data
      </button>
      {isLoading && <h1>Loading...</h1>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>AGE</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr>
                <td>{u._id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>{u.isActive == true ? "Active" : "NotActive"}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{deleteUser(u._id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
