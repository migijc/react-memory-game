import React, {useState} from "react"
export default function Score(props){
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHightScore] = useState(0)

    return(
        <div>
            <p className="score">Current Score {currentScore}</p>
            <p className="score">High Score {highScore}</p>
        </div>
    )
   
}