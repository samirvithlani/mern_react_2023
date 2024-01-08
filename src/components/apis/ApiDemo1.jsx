import axios from "axios";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton";
import { Modal } from "react-bootstrap";
import { CustomeLoader } from "../CustomeLoader";


export const ApiDemo1 = () => {
  const [show, setShow] = useState(false);
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

    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    if (res.status == 204) {
      //alert("User Deleted Successfully")
      fetchUserData();
    }
  };

  const [singleUser, setsingleUser] = useState({})
  const handleClick = async (id) => {

    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    //console.log(res);
    setsingleUser(res.data.data)
    setShow(true)
    
  }
  const handleClose= ()=>{

    setShow(false)

  }

  useEffect(() => {
    fetchUserData();
  }, []);

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
      {isLoading && <CustomeLoader/>}
      <h1>GET API DEMO 1</h1>
      {/* <Button variant="primary">Fetch User Data</Button> */}
      <MyButton name="Fetch User Data" />
      {/* <button
        onClick={() => {
          fetchUserData();
        }}
      >
        Fetch User Data
      </button> */}
      

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
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(u._id);
                    }}
                  >
                    Delete
                  </button>{" "}
                  &nbsp;
                  <Link to={`/userupdate/${u._id}`} className="btn btn-warning">
                    Update
                  </Link>{" "}
                  &nbsp;
                  <Link to={`/userdetail/${u._id}`} className="btn btn-success">
                    View
                  </Link>
                  <Button variant="primary" onClick={()=>{
                    handleClick(u._id)
                  }}>VIEW</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{singleUser.email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
