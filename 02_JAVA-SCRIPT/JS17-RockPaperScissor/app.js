// Colors

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//!--------------Selectors
//3 seçeneğin olduğu div
const selectionArticle = document.querySelector(".selection")
selectionArticle.style.border = "1px solid red"


//senin ve pc nin seçimlerinin div i
const yourChoiseDiv = document.querySelector("#your-choice")


const pcChoiseDiv = document.querySelector("#pc-choice");


//Sonuç bilgilendirmesi
const yourMessage = document.querySelector(".message")

//scores
const pcScoreSpan = document.querySelector("#pc-score")
const yourScoreSpan = document.querySelector("#your-score")

//Modal
const modalCardSection = document.querySelector(".modal-card");
const modal = document.querySelector(".modal");
const finalyourMessage = document.getElementById("final-message");
const playAgainButton = document.getElementById("play-again");


//Variables 
let yourSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")


selectionArticle.onclick = (tus) => {
    console.log(tus.target.id); // mesela rock

    if (tus.target.id) {
        yourSelectImg.src = `./assets/${tus.target.id}.png`
        yourChoiseDiv.appendChild(yourSelectImg)

        let index = Math.floor(Math.random() * 3);

        let pcDizi = ["rock", "paper", "scissor"];

        pcSelectImg.src = `./assets/${pcDizi[index]}.png`
        pcChoiseDiv.appendChild(pcSelectImg)

        //basarimi hesapla

        calculateResult(tus.target.id, pcDizi[index]);

        if (pcScoreSpan.textContent == 10 || yourScoreSpan.textContent==10) {
            openModel();
        
    }
    }


}

const calculateResult = (yourId, pcId) => {
    if (yourId == pcId) {
    console.log("berabere");
  } else {
    if (yourId == "rock") {
      pcId == "paper" ? lost() : win();
    } else if (yourId == "paper") {
      pcId == "rock" ? win() : lost();
    } else if (yourId == "scissor") {
      pcId == "rock" ? lost() : win();
    }
  }
};

const lost=()=>{
// kaybettin mesajı ve pc nin score u 1 artacak
yourMessage.textContent = "You Lost"
yourMessage.style.backgroundColor =RED;
pcScoreSpan.textContent++ // aslinda textContent string döner ama bunu ++ yaptigimiz icin bunu number olarak algilar ama x= x+1 yapsaydim algilamazdi

}

const win = () => {

  // kazandın mesajı ve benim score umu 1 arttır
yourMessage.textContent = "You Win"
yourMessage.style.backgroundColor =GREEN;
yourScoreSpan.textContent++

};

const openModel = () => {
// Modalı aç
     modalCardSection.classList.add("show");
     if(yourScoreSpan.textContent==10){
        finalyourMessage.textContent = "You Win";
        modal.style.backgroundColor = GREEN

     }else{
        finalyourMessage.textContent = "You Lost";
        modal.style.backgroundColor = RED

     }
      
}



document.querySelector("#play-again").onclick =()=> {

    modalCardSection.style.display = "none";
    window.location.reload();
    
}
