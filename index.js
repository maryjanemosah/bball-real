let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeStoreEl2 =document.getElementById("home-score")

let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl3 =document.getElementById("home-score")



function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl2.textContent = homeScore
    
} 

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl3.textContent = homeScore
}


let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayStoreEl =document.getElementById("away-score")
let awayScore = 0

let awayScoreBtnTwo = document.getElementById("away-score-btn-2")
let awayStoreEl2 =document.getElementById("away-score")

let awayScoreBtnThree = document.getElementById("away-score-btn-3")
let awayStoreEl3 =document.getElementById("away-score")


function increaseAwayScoreOne() {
    awayScore += 1
    awayStoreEl.textContent =  awayScore
}

function increaseAwayScoreTwo(){
    awayScore += 2
    awayStoreEl2.textContent = awayScore
}

function increaseAwayScoreThree() {
    awayScore += 3
    awayStoreEl3.textContent =  awayScore
}