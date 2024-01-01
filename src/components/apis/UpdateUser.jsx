import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateUser = () => {

    const navigate = useNavigate()
    const id = useParams().id
    const {register,handleSubmit,formState:{errors}} = useForm(
        {
            defaultValues: async()=>{
                const res = await axios.get("https://node5.onrender.com/user/user/"+id)
                return {
                    name:res.data.data.name,
                    email:res.data.data.email,
                    age:res.data.data.age,
                    isActive:res.data.data.isActive?true:false
                }
                //return res.data.data // if key match with register name then no need to write above code
            }
        }
    );
    
    
    const submitHandler = async(data) => {

       // console.log(data);
        const res  = await axios.put("https://node5.onrender.com/user/user/"+id,data)
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        if(res.status == 200){
            navigate("/apidemo1")
        }
    }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" {...register("age")} />
            </div>
            <div>
                <input type="submit"  value="update"/>
            </div>
        </form>
    </div>
  )
}
