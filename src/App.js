import React, {useEffect, useState} from "react";
import CardsDisplay from "./components/CardDisplay";
import Score from "./components/Score"
import Header from "./components/Header";
import Footer from "./components/Footer";

//psa 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
function App(props) {
const [listOfClicked, setListOfClicked] = useState([])
const [clickedOnLastRound, setClickedOnLastRound] = useState("")


  function handleClick(clickedCards){
    setListOfClicked(clickedCards)
  }


  function getHighScore(lastRoundsList){
    if (lastRoundsList.length > clickedOnLastRound){
      setClickedOnLastRound(lastRoundsList.length)
    }
  }

  return (
    <div className="App">
      <Header/>
      <Score currentScore={listOfClicked.length} highScore={clickedOnLastRound}/>
      <div className="cardDisplay">
       <CardsDisplay updateApp={handleClick} getLastRound={getHighScore}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;