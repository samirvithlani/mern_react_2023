import React, { useContext } from 'react'
import { AppContext } from '../../context'

export const StudentChild = () => {
    const {name}  = useContext(AppContext)
  return (
    <div>
        <h1>Student Child</h1>
        <h2>{name}</h2>
    </div>
  )
}
