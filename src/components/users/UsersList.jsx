import React from "react";

export const UsersList = (props) => {
  return (
    <div>
      <h1>USERS LIST </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users?.map((u) => {
            return (
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>
                  <button onClick={()=>{props.deleteUser(u.id)}} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>{props.test("amit")}}>Test</button>
    </div>
  );
};
