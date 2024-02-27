let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const generateCompChoice = () =>{
    const compChoices = ['rock','paper','scissor'];
    const index = Math.floor(Math.random()*3);
    return compChoices[index];
}

const drawGame = () =>{
    msg.innerHTML = "Game is Draw";
    msg.style.backgroundColor = "black";
    console.log("Draw");
}

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else if(userChoice === "rock"){
        if(compChoice === "paper")
        {
            msg.innerHTML = `Computer wins! ${compChoice} beats ${userChoice}`; //adding variable value
            compScore++;
            comp.innerHTML = compScore;
            msg.style.backgroundColor = "blue";
            console.log("Comp");
        }
        else if(compChoice === "scissor") 
        {  
            msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
            userScore++;
            user.innerHTML = userScore;
            msg.style.backgroundColor = "green";
            console.log("You");
        }
    }
    else if(userChoice === "paper")
    {
        if(compChoice === "rock")
        {
            msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
            userScore++;
            user.innerHTML = userScore;
            msg.style.backgroundColor = "green";
            console.log("You");
        }
        else if(compChoice === "scissor")
        { 
            msg.innerHTML = `Computer wins! ${compChoice} beats ${userChoice}`;
            compScore++;
            comp.innerHTML = compScore;
            msg.style.backgroundColor = "blue";
            console.log("Comp");
        }
    }
    else if(userChoice === "scissor")
    {
        if(compChoice === "paper")
        {
            msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
            userScore++;
            user.innerHTML = userScore;
            msg.style.backgroundColor = "green";
            console.log("You");
        }
        else if(compChoice === "rock")   
        {
            msg.innerHTML = `Computer wins! ${compChoice} beats ${userChoice}`;
            compScore++;
            comp.innerHTML = compScore;
            msg.style.backgroundColor = "blue";
            console.log("Comp");
        }
    }
}
//adding click event Listener on every choice through loop
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
)