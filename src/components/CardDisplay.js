import React, {useState, useEffect} from "react"
import Card from './Card'
export default function CardsDisplay(props){
    const [characterNames, setcharacterNames] = useState({})
    const [characterImages, setcharacterImages] = useState({})
    const [indexesToDisplay, setIndexesToDisplay] = useState("")
    const [cardsToDisplay, setCardsToDisplay] = useState('')
    const [listOfCardsClicked, setListOfCardsClicked] = useState([])

    useEffect(()=>{
        (async ()=>{
            const response= await fetch("https://thronesapi.com/api/v2/Characters")
            response.json()
            .then(response => {
                let names=[]
                let urls=[]
                let indexes=[]
               for(let i=0; i<= 12; i++){
                    names.push(response[i].firstName)
                    urls.push(response[i].imageUrl)
                    indexes.push(response[i].id)
               }
               setcharacterNames(names)
               setcharacterImages(urls)
            })
        })()
    }, [])

    useEffect(()=>{
        getCardsToDisplay()
    }, [characterImages, characterNames, listOfCardsClicked])


    function displayCards(){
        if(cardsToDisplay.length > 0){
            return cardsToDisplay
        }
    }

    function getCardsToDisplay(){
        let arrayOfCards=[]
        let allIndexes=[0,1,2,3,4,5,6,7,8,9,10,11]
        let randomIndexes=[]
        for(let i=12; i > 0; i--){
            let randomIndex=allIndexes[Math.floor(Math.random()* i)]
            randomIndexes.push(randomIndex)
            let filteredArray=[]
            allIndexes.forEach(item =>{
                if(item!==randomIndex){
                    filteredArray.push(item)
                }
            })
            allIndexes=filteredArray
        }
        setIndexesToDisplay(randomIndexes)
        randomIndexes.forEach(index=>{
            arrayOfCards.push(<Card key={index} source={characterImages[index]} name={characterNames[index]} handleClick={handleCardClick}/>)
        })
        setCardsToDisplay(arrayOfCards)
    }


    function handleCardClick(e){
        let returnArray=[...listOfCardsClicked]
        console.log()
        if(returnArray.includes(e.target.closest(".displayedCard").dataset.character)){
            props.getLastRound(returnArray)
             setListOfCardsClicked([])
             return props.updateApp([])
        }
        returnArray.push(e.target.closest(".displayedCard").dataset.character)
        setListOfCardsClicked(returnArray)
        props.updateApp(returnArray)
    }


    return(
        <div className='cardsDisplay'>
            {displayCards()}
        </div>
    )
}