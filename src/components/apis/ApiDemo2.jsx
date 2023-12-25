import axios from "axios";
import React, { useState } from "react";

export const ApiDemo2 = () => {
  const [users, setusers] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://gorest.co.in/public/v2/users");
    console.log(res.data);
    setusers(res.data);
  };
  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch Data
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>GENDER</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>
                  {u.status == "active" ? (
                    <span className="badge badge-success">Active</span>
                  ) : (
                    <span className="badge badge-danger">Not Active</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
