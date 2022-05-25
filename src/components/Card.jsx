import React from 'react'

const Card = ({array, title, color}) => {



  return (
    <article style={{ backgroundColor: `${color}`}} className='card'>
      <h2>{title}</h2>
      <ul>
        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
        <li>{array[3]}</li>
      </ul>
    </article>
  )
}

export default Card