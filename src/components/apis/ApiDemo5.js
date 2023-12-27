import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {


    const addUser = async () => {

        const user = {
            name:"ram",
            email:"ram101@gmail.com",
            status:"active",
            gender:"male"
        }

        try{
            const res = await axios.post("https://gorest.co.in/public/v2/users",user,{
                headers:{
                    "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
                }
            })
            console.log(res.data)           

        }catch(err){

                console.log("catch",err)

        }



    }


  return (
    <div>
        <button onClick={()=>{addUser()}}>Add User</button>
    </div>
  )
}
