import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterEmployee = () => {


    const {register,handleSubmit,formState:{errors},reset} = useForm(
        {
            // mode:"onChange"
            // mode:"onBlur"
            mode:"all"
        }
    )
    const validationSchema = {

        name:{
            required:{
                value:true,
                message:"NAME IS REQUIRED*"
            },
            minLength:{
                value:3,
                message:"NAME SHOULD BE MINIMUM 3 CHARACTERS*"
            }
        },
        gender:{
            required:{
                value:true,
                message:"Gender is Required*"
            }
        },
        department:{
            required:{
                value:true,
                message:"Department is Required*"
            }
        },
        skills:{
            required:{
                value:true,
                message:"Skills is Required*"
            }
        },
        contact:{
            required:{
                value:true,
                message:"Contact is Required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Invalid Contact Number*"
            }
        }

    }

    const submitHandler = (data) => {

        console.log(data)
        reset()
    }
    console.log(errors)
  return (
    <div>
        <h1>REGISTER EMPLOYEE</h1>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type="text" {...register("name",validationSchema.name)}>
                        
                    </input>
                    {
                            errors.name && <span style={{color:"red"}}>{errors.name.message}</span>
                        }
                </div>
                <div>
                    <label>GENDER</label>
                    <br/>
                    MALE : <input type="radio" value="male" name="gender" {...register("gender",validationSchema.gender)}></input> <br></br>
                    FEMALE : <input type="radio" value="female" name="gender" {...register("gender",validationSchema.gender)}></input> 
                    {
                        errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>
                    }
                </div>
                <div>
                    <label>department</label>
                    <select {...register("department",validationSchema.department)}>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="SALES">SALES</option>
                    </select>
                    {
                        errors.department && <span style={{color:"red"}}>{errors.department.message}</span>
                    }
                </div>
                <div>
                    <label>SKILLS</label>
                    <br/>
                    HTML : <input type="checkbox" value="html" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    css : <input type="checkbox" value="css" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    js : <input type="checkbox" value="js" name ="skills"  {...register("skills",validationSchema.skills)}></input> <br></br>
                    {
                        errors.skills && <span style={{color:"red"}}>{errors.skills.message}</span>
                    }
                </div>
                <div>
                    <label>CONTACT</label>
                    <input type="text" {...register("contact",validationSchema.contact)}></input>
                    {
                        errors.contact && <span style={{color:"red"}}>{errors.contact.message}</span>
                    }
                </div>
                <div>
                    <input type="submit" value="REGISTER"></input>
                    <button type="button" onClick={() => reset()}>RESET</button>
                </div>
            </form>
        </div>
    </div>
  )
}
