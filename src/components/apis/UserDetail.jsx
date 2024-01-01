import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const [user, setuser] = useState({})
    const id = useParams().id
    const fetchUserData = async () => {

        const res = await axios.get("https://node5.onrender.com/user/user/"+id)
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        setuser(res.data.data);

    }
    useEffect(() => {
      
        fetchUserData();
    
      
    }, [])
    
  return (
    <div>

        <h1>USER DETAIl =   </h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.age}</h1>
        
    </div>
  )
}
