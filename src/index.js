document.addEventListener("DOMContentLoaded", () => {
    // card options
    const cardArray= [
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
    ]

    
    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector ("#result")
    let cardChosen = []
    let cardChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }


    function flipCard(){
        let cardID = this.getAttribute("data-id")
        cardChosen.push(cardArray[cardID].name)
        cardChosenIds.push(cardID)
        this.setAttribute("src", cardArray[cardID].img)
        if (cardChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll("img")
        const optionOneId = cardChosenIds[0]
        const optionTwoId = cardChosenIds[1]

        if (optionOneId == optionTwoId)
            {
                alert("You have clicked the same image!")
                cards [optionOneId].setAttribute("src", "src/images/blank.png")
                cards [optionTwoId].setAttribute("src", "src/images/blank.png")
            } else if (cardChosen[0] === cardChosen[1]) {
                alert ("You have found a match!")
                cards [optionOneId].setAttribute("src", "src/images/white.png")
                cards [optionTwoId].setAttribute("src", "src/images/white.png")
                cards [optionOneId].removeEventListener("click", flipCard)
                cards [optionTwoId].removeEventListener("click", flipCard)
                cardsWon.push(cardChosen)
            } else {
                cards [optionOneId].setAttribute("src", "src/images/blank.png")
                cards [optionTwoId].setAttribute("src", "src/images/blank.png")
                alert("Sorry, try again!")
            }
            cardChosen = []
            cardChosenIds = []
            resultDisplay.textContent = cardsWon.length
            if (cardsWon.length === cardArray.length / 2)
            {
                resultDisplay.textContent = "Congratulations! You have won!"
            }
           
            console.log(cardChosen)
            console.log(cardsWon)
    }
    

    createBoard()
})