import React, {useState, useEffect} from "react"
import Card from './Card'
export default function CardsDisplay(){
    const [characterNames, setcharacterNames] = useState({})
    const [characterImages, setcharacterImages] = useState({})
    const [indexesToDisplay, setIndexesToDisplay] = useState("")
    const [cardsToDisplay, setCardsToDisplay] = useState('')
 
    
    //Empty dependency array included, Will ONLY run once right after inital render
    useEffect(()=>{
        (async ()=>{
            const response= await fetch("https://thronesapi.com/api/v2/Characters")
            response.json()
            .then(response => {
                let names=[]
                let urls=[]
                let indexes=[]
               for(let i=0; i<= 12; i++){
                    names.push(response[i].fullName)
                    urls.push(response[i].imageUrl)
                    indexes.push(response[i].id)
               }
               setcharacterNames(names)
               setcharacterImages(urls)
            })
        })()
    }, [])

    // Dependany array with props, state or other values in it will cause effect
    // to only run IF that dependency has any changes made it it. 
    useEffect(()=>{
        let arrayOfCards=[]
        let allIndexes=[0,1,2,3,4,5,6,7,8,9,10,11]
        let randomIndexes=[]
        for(let i=11; i >= 0; i--){
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
            arrayOfCards.push(<Card key={index} source={characterImages[index]} name={characterNames[index]}/>)
        })
        setCardsToDisplay(arrayOfCards)
    }, [characterImages, characterNames])


    function displayCards(){
        if(cardsToDisplay.length > 0){
            return cardsToDisplay
        }
    }

    useEffect(()=>{
        console.log("hey")
        document.addEventListener("click", (e)=>{
            if(e.target.className==="cardImage"){
                console.log(e.target)
            }
        })
    }, [])


    return(
        <div className='cardsDisplay'>
            {displayCards()}
        </div>
    )
}