import React from 'react'

const PersonalInformation = ({person, title}) => {

  console.log(title)

  return (
    <ul className='personalInformation'>
      <h2>{title}</h2>
      <li><b>Nombre: </b>{person.name}</li>
      <li><b>Edad: </b>{person.age}</li>
      <li><b>Película favorita: </b>{person.favoriteMovie}</li>
      <li><b>Música Favorita: </b>{person.favoriteMusic}</li>
    </ul>
  )
}

export default PersonalInformation