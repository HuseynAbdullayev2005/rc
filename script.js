const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choose_you = document.querySelector(".choose_you");
const choose_computer = document.querySelector(".choose_computer")
let computerScore = 0;
let youScore = 0;

rock.addEventListener("click", function () {

    const chooserock = document.querySelector(".chooseYou")
    chooserock.innerHTML = "rock";

    const chooseComputer = document.querySelector(".chooseComputer");
    chooseComputer.innerText = compChoose();



    rockvs(chooseComputer);
    let scorecomp = document.querySelector(".scorecomp")
    scorecomp.innerHTML = computerScore;

    let scoreyou = document.querySelector(".scoreyou")
    scoreyou.innerHTML = youScore;




})


paper.addEventListener("click", function () {

    const choosepaper = document.querySelector(".chooseYou")
    choosepaper.innerHTML = "paper";

    const chooseComputer = document.querySelector(".chooseComputer");
    chooseComputer.innerText = compChoose();





    papervs(chooseComputer);
    let scorecomp = document.querySelector(".scorecomp")
    scorecomp.innerHTML = computerScore;

    let scoreyou = document.querySelector(".scoreyou")
    scoreyou.innerHTML = youScore;
})

scissors.addEventListener("click", function () {

    const choosescissors = document.querySelector(".chooseYou")
    choosescissors.innerHTML = "scissors";


    const chooseComputer = document.querySelector(".chooseComputer");
    chooseComputer.innerText = compChoose();



    scissorsvs(chooseComputer);
    let scorecomp = document.querySelector(".scorecomp")
    scorecomp.innerHTML = computerScore;

    let scoreyou = document.querySelector(".scoreyou")
    scoreyou.innerHTML = youScore;
})


function compChoose() {
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)];
}


function rockvs(chooseComputer) {
    if (chooseComputer.innerText === "rock") {
        let draw = document.querySelector(".winorlose")
        draw.innerHTML = "Draw"
        draw.style.backgroundColor = "gray";
        console.log("beraber");
        

    }
    else if (chooseComputer.innerText === "paper") {
        console.log("uduz");
        computerScore++;
     let lose = document.querySelector(".winorlose")
     lose.innerHTML = "you lose"
     lose.style.backgroundColor = "red"
    }
    else {
        console.log("uddu");
        youScore++;
        let win = document.querySelector(".winorlose")
        win.innerHTML = "You win"
        win.style.backgroundColor = "green";
    }
}

function papervs(chooseComputer) {
    if (chooseComputer.innerText === "paper") {
        console.log("draw");
        let draw = document.querySelector(".winorlose")
        draw.innerHTML = "Draw"
        draw.style.backgroundColor = "gray";
    }
    else if (chooseComputer.innerText === "rock") {
        console.log("uddu");
        youScore++;
        let win = document.querySelector(".winorlose")
        win.innerHTML = "You win"
        win.style.backgroundColor = "green";
    }
    else {
        console.log("uduz");
        computerScore++;
        let lose = document.querySelector(".winorlose")
        lose.innerHTML = "you lose"
        lose.style.backgroundColor = "red"
    }
}

function scissorsvs(chooseComputer) {
    if (chooseComputer.innerText === "scissors") {
        console.log("Draw");
        let draw = document.querySelector(".winorlose")
        draw.innerHTML = "Draw"
        draw.style.backgroundColor = "gray";
    }
    else if (chooseComputer.innerText === "paper") {
        console.log("uddu");
        youScore++;
        let win = document.querySelector(".winorlose")
        win.innerHTML = "You win"
        win.style.backgroundColor = "green";
    }
    else {
        console.log("uduz");
        computerScore++;
        let lose = document.querySelector(".winorlose")
        lose.innerHTML = "you lose"
        lose.style.backgroundColor = "red"
    }
}




