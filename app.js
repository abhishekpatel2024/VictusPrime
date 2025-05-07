let gameSeq = [];
let userSeq = [];

let highestScore = 0;
let score = 0;

let btns = ["red", "yellow", "green", "purple"];// This is the color of the button

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
       console.log("Game Stared");
       started = true;
       levelUp();
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500)
}

function userFlash(btn){ //user flash color is green
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp(){
    userSeq = [];// This is the user sequence where the color of the button is pushed
    level++;
    h2.innerText = `level ${level}`;


    let randIdx = Math.floor(Math.random() * 3);// This is the random index of the game system sequence
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameFlash(randBtn);
    gameSeq.push(randcolor);// This is the game system sequence where the random color is pushed
    console.log(gameSeq);
}

function CheckAns(idx){
    // console.log(`curr level: ${level}`)

    if(userSeq[idx] === gameSeq[idx]){
        console.log("correct");
        if(userSeq.length === gameSeq.length){

            setTimeout(levelUp, 1000);// This is the function to level up the game after 1 second

        }

    }
    else{
        h2.innerHTML = `Game over! your score is <b>${level}</b><br> Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        
        reset();


    }


}

function btnPress(){
   if(started == true){
    let btn = this;// This is the button which is pressed by the user
    userFlash(btn)
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    CheckAns(userSeq.length - 1);// This is the function to check the answer of the user sequence and game system sequence
    
   }
      
}


let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}
function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}
