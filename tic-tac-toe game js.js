let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //PlayerX ,PlayerO mhanje konat latter print honar atta aapan O sati true kelay

//2D array khalach aapan advvya line made pn lihu sakato
const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8], 
];

const resetGame = () =>{
      turnO = true;

}

boxes.forEach((box) => {
 box.addEventListener("click",() =>{
    console.log("box was click");
    if(turnO === true){
      box.innerText = "O";
      turnO = false;  // karan parat dusarya condition la ti true ny jhal pahije mhanje btn click kel ki O asal ki next click la parat lagech o ny aala pahije
    }else{
        box.innerText = "X";
        turnO = true;  //X aala ki lage second click la ny aal pahije X mg O aal aal pahije mhanun O true 
    }
    box.disabled = true; //ekada btn var click kel ki parat tyachi value change ny karayla aali pahije ya sati

    checkWinner();
 });  
});
      
  const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
  }

   const  shoWinner = (Winner) =>{
      msg.innerText = `Congratulations,Winner is ${Winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
   }

const checkWinner = () =>{
    for(let pattern of winPatterns){ //winpatters varch array ahe  // index madlya index sati
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;
                if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
                    if(pos1Val === pos2Val && pos2Val === pos3Val){
                        console.log("Winner",pos1Val);
                        shoWinner(pos1Val);
                    }
                }
    }
}

