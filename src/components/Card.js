import React, {useEffect} from 'react'
export default function Card(props){

  

    return(
        <div className="displayedCard">
            <p>{props.name}</p>
            <div className="cardImage" style={{backgroundImage:(`url(${props.source})`)}}/>
        </div>
    )
}
