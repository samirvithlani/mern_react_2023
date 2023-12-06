import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddEmployee = () => {
    //react-hook-form
    const {register,handleSubmit} = useForm()
    const [employee, setemployee] = useState({})
    //register - function [array spred operator]
    //handleSubmit - function

    const submitHandler = (data)=>{
        
        console.log(data)
        setemployee(data)
    }
    
  return (
    <div>
        <h1>ADD EMPLOYEE</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type="text" {...register("empname")}></input>
                </div>
                <div>
                    <label>AGE</label>
                    <input type="text" {...register("age")}></input>
                </div>
                <div>
                    <label>GENDER</label>
                    <br/>
                    MALE : <input type="radio" name='gender' value="male" {...register("gender")}></input> <br/>
                    FEMALE : <input type="radio" name='gender' value="female" {...register("gender")}></input> <br/>
                </div>
                <div>
                    <label>DEPARTMENT</label>
                    <select {...register("dept")}>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="SALES">SALES</option>
                    </select>
                </div>
                <div>
                    <label>SKILLS</label>
                    <br/>
                    JAVA : <input type="checkbox" name='skills' value="java" {...register("skills")}></input> <br/>
                    HTML : <input type="checkbox" name='skills' value="html" {...register("skills")}></input> <br/>
                    CPP : <input type="checkbox" name='skills' value="cpp" {...register("skills")}></input> <br/>
                </div>
                <div>
                    <label>FAC COLOR</label>
                    <input type="color" {...register("favcolor")}></input>
                </div>
                <div>
                    <input type="submit" value="ADD EMPLOYEE"></input>
                </div>
            </form>
            <div>
                <h1>EMPLOYEE DETAILS</h1>
                <h2>NAME : {employee.empname}</h2>
                <h2>AGE : {employee.age}</h2>
                <h3>GENDER: -{employee.gender}</h3>
                {
                    employee.skills && employee.skills?.map((skill)=>{
                        return <h3>SKILLS : {skill}</h3>
                    })
                }
            </div>
    </div>
  )
}
