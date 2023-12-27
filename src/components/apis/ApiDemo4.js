import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addUser = async () => {
    const user = {
      name: "Ram",
      email: "ram@gmail.com",
      age: 25,
      isActive: true,
    };

    const res = await axios.post("https://node5.onrender.com/user/user", user);
    console.log(res.data);
  };
  const submitHandler = async (data) => {
    //console.log(data)
    // const user = {
    //     name:data.name,
    //     email:data.email,
    //     age:data.age,
    //     isActive:data.isActive == "true" ? true : false
    // }
    var user = Object.assign({}, data);
    user.isActive = user.isActive == "true" ? true : false;
    //console.log(user)

    const res = await axios.post("https://node5.onrender.com/user/user", user);
    console.log(res);
    if (res.status == 201) {
        toast.success('user Added successfully...!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } else {
        toast.error('Something went wrong', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1>POST API DEMO</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>Age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label>Active</label>
          ACTIVE : <input
            type="radio"
            value="true"
            {...register("isActive")}
          />{" "}
          <br></br>
          INACTIVE :{" "}
          <input type="radio" value="false" {...register("isActive")} />
        </div>
        <div>
          <input type="submit" value="Add User" />
        </div>
      </form>
      {/* <button onClick={()=>{addUser()}}>Add User</button> */}
    </div>
  );
};
