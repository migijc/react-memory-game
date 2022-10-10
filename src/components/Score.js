import React, {useEffect, useState, useRef} from "react"
export default function Score(props){
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const score= useRef()

   
    
    return(
        <div >
            <p  ref={score} className="score">Current Score {currentScore}</p>
            <p className="score">High Score {highScore}</p>
        </div>
    )
}