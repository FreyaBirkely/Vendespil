// let cards = document.querySelectorAll(".card")
// let respons = document.querySelector("#respons")

const cardsWrapper = document.querySelector("#cards-wrapper")

let cardArray = []
let numberOfClick = 0
let card1 = null
let card2 = null
let card1data = null
let card2data = null


function handleClick(event) {
    let currentCard = event.currentTarget

    numberOfClick++

    if (numberOfClick === 1) {
        if (card1 && !card1.classList.contains("done")) {
            card1.classList.remove("show")
        }
        if (card2 && !card2.classList.contains("done")) {
            card2.classList.remove("show")
        }

        card1 = currentCard
        card1.classList.add("show")
        numberOfClick = 1
        return
    }
    if (currentCard === card1data) return

    if (numberOfClick === 2) {
        card2 = currentCard
        card2.classList.add("show")

        if (card1 != card2) {
            card1data = card1.getAttribute("data-card")
            card2data = card2.getAttribute("data-card")
            if (card1data == card2data) {
                card1.classList.add("done")
                card2.classList.add("done")
                card1.removeEventListener("click", handleClick)
                card2.removeEventListener("click", handleClick)
            }
        }
        numberOfClick = 0

        console.log(numberOfClick);
    }

}


function createCards(numberOfCards) {
    for (let index = 0; index < numberOfCards; index++) {
        cardArray.push(`<li class="card" data-card=${index}><span class="front"></span><span class="back">${index}</<span></li>`)
        cardArray.push(`<li class="card" data-card=${index}><span class="front"></span><span class="back">${index}</<span></li>`)
    }

    // @ts-ignore
    let shuffleArray = _.shuffle(cardArray)

    insetHtml(shuffleArray)
}


function insetHtml(shuffleArray) {
    shuffleArray.forEach((card) => {
        cardsWrapper.insertAdjacentHTML("beforeend", card)
        let allCards = document.querySelectorAll(".card")
        addClickEvent(allCards)
    })
}


function addClickEvent(cards) {
    cards.forEach((card) => {
        card.addEventListener("click", handleClick)
    })
}

document.querySelector("#reset").addEventListener("click", resetGame)
function resetGame() {
    location.reload()
}

createCards(10)



// cards.forEach((li) => {
//     li.addEventListener("click", (event) => {
//         const target = event.currentTarget
//         const cardId = target.getAttribute("data-card")
//         getRespons(cardId)
//     })
// })


// function getRespons(responsText) {
//     respons.innerHTML = responsText
// }
