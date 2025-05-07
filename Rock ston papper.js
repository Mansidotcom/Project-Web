let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompChoice = ()=>{
      const options = ["rock","papper","scissors"];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
}

const drawGame = ()=>{
      console.log("game was draw.");
      msg.innerText = "you win";
      msg .style.backgroundColor = "#081b31";
}

const showWinner = (userWin)=>{
      if(userWin){
            userscore++;
            userscorepara.innerText = userscore;
            msg.innerText = 'you win.';
            msg .style.backgroundColor = "green";
      }
      else{
            compscore++;
            compscorepara.innerText = compscore;
            msg.innerText = 'you lose';
            msg .style.backgroundColor = "red";
      }
}

const playGame = (userChoice)=>{
      console.log("user choice = ",userChoice);
      const compChoice = gencompChoice();
      console.log("comp choice =",compChoice);

      if(userChoice === compChoice){
            //draw game
          drawGame();
      }
       else{
            let userWin = true;
            if(userChoice === "rock"){
                  //scissors,papper
                 userWin = compChoice === "papper"? false: true;
            }
      else if(userChoice === "papper"){
                  //rock,scissors
            userWin = compChoice === "scissors"? false:true;
            }
      else {
                  //rock,papper
                  userWin = compChoice === "rock"? false:true;
            }
            showWinner(userWin);
          }
}

choices.forEach((choice) =>{
      choice.addEventListener("click",()=>{
      const userChoice = choice.getAttribute("id");
       console.log("choice was clicked",userChoice);
       playGame(userChoice);
      });
       });
    