import React, {useEffect} from 'react'
export default function Card(props){

  
    return(
        <div data-character={props.name} onClick={props.handleClick} className="displayedCard">
            <p>{props.name}</p>
            <div className="cardImage" style={{backgroundImage:(`url(${props.source})`)}}/>
        </div>
    )
}
