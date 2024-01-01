import React, { useEffect, useState } from 'react'

export const HookDemo = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log("useEffect called")
    },[])
    
  return (
    <div>
            <button onClick={()=>setcount(count+1)}>click me</button>
            {count}
    </div>
  )
}
