window.addEventListener("DOMContentLoaded", () => {
  let choices = document.querySelectorAll(".choice");
  let kompID = document.querySelector("#kompID");
  let userID = document.querySelector("#userID");
  let rp = document.querySelector('.rp')
  let result = document.querySelector('.result');
  let btn = document.querySelector('.btn');
  let emoji = document.querySelector('.emoji');
  let userChoice = "";
  let computerChoice = "";
  let winner = "";
  let user = 0;
  let computer = 0;
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      userChoice = choice.id;
      ComputerChoice();
      ShowWinner();
      change();
      console.log(kompID.innerHTML);
      console.log(`Siz: ${userChoice}`);
      console.log(`Kompyuter: ${computerChoice}`);
      console.log(`BUgun G'oli: ${winner}`)
      ShowResult()
    });
  });
  let ComputerChoice = () => {
    value = Math.random();
    if (value <= 0.33) {
      computerChoice = "rock";
    } else if (value > 0.33 && value <= 0.66) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
  };

  let ShowWinner = () => {
    if (userChoice == "rock") {
      if (computerChoice == "rock") {
        winner = "Durrang";
      } else if (computerChoice == "paper") {
        winner = "Kompyuter";
      } else {
        winner = "Siz";
      }
    } else if (userChoice == "paper") {
        if(computerChoice=="paper") {
            winner = "Durrang";
        }else if (computerChoice == "rock"){
            winner="Siz";
        }else{
            winner = "Kompyuter";
        }
    }else if (userChoice == "scissors"){
        if(computerChoice=="scissors"){
            winner = "Durrang";
        }else if (computerChoice == "paper"){
            winner = "Siz";
        }else{
            winner = "Kompyuter";
        }
    }
  };
  let change = ()=>{
      if(winner=="Siz"){
        user++;
        userID.innerHTML = `${user}`
      }else if(winner=="Kompyuter"){
          computer++;
          kompID.innerHTML = `${computer}`
      }else{
          user++;
          computer++;
          
        userID.innerHTML = `${user}`
        
        kompID.innerHTML = `${computer}`

      }
  }

  let ShowResult = ()=>{
    rp.style.display = 'none'
    result.style.display = 'block'
    if(winner=='Siz'){
        emoji.src = './party-popper_1f389.png'
    }else if(winner=='Kompyuter'){
        emoji.src = './cross-mark_274c.png'
    }else{
        emoji.src = './handshake_1f91d.png'
    }
  }
  btn.addEventListener('click', ()=>{
      rp.style.display = 'block'
      result.style.display='none'
  })
});
