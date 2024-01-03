import React, { useState } from 'react'
import { AppContext } from '../../context'
import { StudentList } from './StudentList'

export const Students = () => {

    const [students, setstudents] = useState([
        {
            id:1,
            name:"raj",
            age:20,
            marks:80
        },
        {   
            id:2,
            name:"amit",
            age:21,
            marks:90
        },
        {
            id:3,
            name:"sumit",
            age:22,
            marks:70
        }
    ])

    //payload
    const studentDispacther = (action,payload)=>{
        switch(action){

            case "ADD_STUDENT":
                setstudents([...students,payload])
            break;
            case "DELETE_STUDENT":
                // students = students.filter((student)=>student.id!=payload.id)
                // setstudents(students)
                setstudents(students.filter((student)=>student.id!=payload.id))
            break;


        }
            

    }




  return (
    <div>
        <AppContext.Provider value={{name:"raj",students,studentDispacther}}>
            <StudentList/>
        </AppContext.Provider>
    </div>
  )
}
