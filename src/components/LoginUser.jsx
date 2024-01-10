import React from 'react'
import { useForm } from 'react-hook-form';

export const LoginUser = () => {

    const {register, handleSubmit,formState:{errors}} = useForm();
    const submitHandler = async(data) => {
        console.log(data);
        
        //API CALL -->
        //RESPONSE -->validate...
        const id = "11234857fldnkjsfh"
        localStorage.setItem("id",id)
        sessionStorage.setItem("id",id)
    }
  return (
    <div>
        <h1>Login User</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter Email" {...register("email")} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" {...register("password")}/>
            </div>
            <div>
                <input type="submit" value="Login" />   
            </div>
        </form>
    </div>
  )
}
