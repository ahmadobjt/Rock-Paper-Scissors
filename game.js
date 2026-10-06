let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

// to generate computer choice
const genCompChoice=()=> {
    const options=["rock","paper","scissors"];
    // generating random num from 0 to 2
    const randomIdx=Math.floor(Math.random()*3);// we are treating as random index
    return options[randomIdx];
}

// for draw game
const gameDraw=()=> {
    msg.innerText="Game was draw. Play again";
    msg.style.background="chocolate";
}

// show winner
const showWinner=(userWin)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="Congratulation! You Win";
        msg.style.background="green";
    }else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="Oops! You Lose";
        msg.style.background="red";
    }
}

// game function
const playGame=(userChoice) => {
    // to generate computer choice
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice) {
        // Draw game
        gameDraw();
    }else {
        let userWin=true;
        if(userChoice==="rock") {
            // scissors,paper
            userWin=compChoice==="paper" ? false:true; 
        }else if (userChoice==="paper") {
            // scissors,rock
            userWin=compChoice==="rock" ? true:false; 
        }else { // for scissors
            // paper,rock
            userWin=compChoice==="paper" ? true:false; 
        }
        showWinner(userWin);
    }
}
// add events on choices
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});