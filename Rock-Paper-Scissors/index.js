let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // rock , paper , scissors
    const options = ["rock" , "paper" , "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
    
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText = "Game was draw , Play Again!";
    msg.style.background =" #081b31";
}

const showWinner= (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.background ="green";
       
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText =`you lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.background ="red";
        }
    
}

const playGame = (userChoice) =>{
    console.log("user choice", userChoice);
    // Generate computer choice --> modular
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if (userChoice === compChoice){
        // Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor , paper
           userWin =  compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            // rock , scissors
          userWin =  compChoice === "scissors"?false : true;
        }
        else {
            // rock , paper
           userWin = compChoice === "rock"?false :true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice)=>{
   
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute('id');
    // console.log('choice was cliked',userChoice);
    playGame(userChoice);
   }) 
})

