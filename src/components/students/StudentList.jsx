import React, { useContext } from "react";
import { AppContext } from "../../context";
import { StudentChild } from "./StudentChild";

export const StudentList = () => {
  const { name, students, studentDispacther } = useContext(AppContext);

  return (
    <div>
      {/* <h1>Student list  {name}</h1> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      studentDispacther("DELETE_STUDENT", student);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <StudentChild></StudentChild>
    </div>
  );
};
