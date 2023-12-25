import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {
    const deleteApiDemo = async () => {

        const res = await axios.delete("https://node5.onrender.com/user/user/657d2e9df1d49eb5edf1b14c")
        console.log(res);
        if(res.status == 204){
            alert("User Deleted Successfully")
        }
        else{
            alert("Something Went Wrong")
        }
    }
  return (
    <div>
            <button onClick={()=>deleteApiDemo()}>Delete Api Demo</button>
    </div>
  )
}
