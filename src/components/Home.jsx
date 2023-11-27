import React from 'react'
import './layout.css'

//Home --> Home -->
export const Home = ({t,ind,ff,users}) => {
  // const users =[
  //   {
  //     id:1,
  //     name:"Raj",
  //   },
  //   {
  //     id:2,
  //     name:"Ravi",
  //   }
  // ]
  console.log("Home props....",t)
  return (
    <div className='content'>
        <h1>HOME Component</h1>
        <h2>Title = {t}</h2>
        <h2>ind = {ind}</h2>
        <h3>{ff.Mg}</h3>
        {
          users.map((user)=>{
            return(
              <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
              </ul>
            )
          })
        }
    </div>
  )
}
