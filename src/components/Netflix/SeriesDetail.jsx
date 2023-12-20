import React from 'react'
import { useParams } from 'react-router-dom'

export const SeriesDetail = () => {
    const id = useParams().id;
    const name = useParams().name;
  return (
    <div>
        <h1>SERIES DETAIL - {id} - {name}</h1>
    </div>
  )
}
