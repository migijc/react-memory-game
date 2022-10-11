import React, {useEffect, useState, useRef} from "react"
export default function Score(props){
    const [highScore, setHighScore] = useState(0)
 

   
    
    return(
        <div className="scoreContainer">
            <p   className="score">Current Score {props.currentScore}</p>
            <p className="score">High Score {props.highScore||0}</p>
        </div>
    )
}