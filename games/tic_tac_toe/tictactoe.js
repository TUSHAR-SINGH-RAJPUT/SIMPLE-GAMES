let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");

let turnO=false; // true for O's turn, false for X's turn

//2D array to represent the board and store the win conditions
const winPatterns=[
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("'box clicked'");
        if(!turnO){
            box.innerHTML="X";
            turnO=true;
        }
        else{
            box.innerHTML="O";
            turnO=false;
        }
        box.disabled=true;
        checkWinner();
    })
})
let winnerMsg;
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML; 
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winnerMsg=document.querySelector(".winnerMsg");
                winnerMsg.innerHTML=`<h4>${pos1} is the winner</h4>`;
                
            }
        }
    }

};

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        
        box.innerHTML="";
        winnerMsg.innerHTML="";
    })
});
