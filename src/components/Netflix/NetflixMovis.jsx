import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovis = () => {
  return (
    <div>
        <h1>MOVIES</h1>
        <ul>
          <li>
            <Link to ="/thrillermovies">THRILL</Link>
          </li>
          <li>
          <Link to ="/netflixmovies/comedy">COMEDY</Link>
          </li>
          <li>
          <Link to ="comedy">comedy 1</Link>
          </li>
        </ul>
    </div>
  )
}
