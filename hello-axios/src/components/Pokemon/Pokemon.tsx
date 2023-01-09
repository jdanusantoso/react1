import React from 'react'

import "./Pokemon.css"


const Pokemon: React.FC <any> = (props:any) => {
  return (
    <div className="pokemon-container">
        <img src={props.sprite} alt="{props.name}" className="pokemon-pic" />
        <h3>{props.name}</h3>
    </div>
  )
}

export default Pokemon