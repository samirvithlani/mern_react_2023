import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context';

export const SeriesDetail = () => {
    const id = useParams().id;
    const name = useParams().name;

    const {company} = useContext(AppContext)
  return (
    <div>
        <h1>SERIES DETAIL - {id} - {name}</h1>
        <h2>{company}</h2>
    </div>
  )
}
