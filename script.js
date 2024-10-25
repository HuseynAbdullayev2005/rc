const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choose_you = document.querySelector(".choose_you");
const choose_computer = document.querySelector(".choose_computer")

rock.addEventListener("click", function () {

    const chooserock = document.createElement("p");
    chooserock.innerText = "rock";
    document.querySelector(".choose_you").appendChild(chooserock);

    const chooseComp = document.createElement("p");
    chooseComp.innerText = compChoose();
    document.querySelector(".choose_computer").appendChild(chooseComp);
    rockpaperscissors(chooserock, chooseComp)

})


paper.addEventListener("click", function () {

    const choosepaper = document.createElement("p");
    choosepaper.innerText = "paper";
    document.querySelector(".choose_you").appendChild(choosepaper);

    const chooseComp = document.createElement("p");
    chooseComp.innerText = compChoose();
    document.querySelector(".choose_computer").appendChild(chooseComp);
    rockpaperscissors(choosepaper, chooseComp)
})

scissors.addEventListener("click", function () {

    const choosescissors = document.createElement("p");
    choosescissors.innerText = "scissors";
    document.querySelector(".choose_you").appendChild(choosescissors);

    const chooseComp = document.createElement("p");
    chooseComp.innerText = compChoose();
    document.querySelector(".choose_computer").appendChild(chooseComp);
    console.log(choosescissors,chooseComp);
    rockpaperscissors(choosescissors, chooseComp)

})


function compChoose() {
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)];
}

function rockpaperscissors(choose1, choose2) {
   if(choose1.innerText==="rock" && choose2.innerText==="rock"){
    console.log("beraber");

   }
}






