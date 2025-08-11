


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reSet");
let newGameBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let turnO= true;
const winPatternsArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

const showWinner = (winner) =>{
  msg.append(winner);
};

const disabledBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const checkWinner = () =>{
   
     for(let pattern of winPatternsArray){
     let val1 = boxes[pattern[0]].innerText;
     let val2 = boxes[pattern[1]].innerText;
     let val3 = boxes[pattern[2]].innerText;
     
     if(val1 !== ""  && val2 !== "" && val3 !== "" ){
        if(val1 === val2 && val2 === val3){
           console.log("winner" ,val1);
        
          // console.log(moves);
            showWinner(val1);
            disabledBtn();
        };

     };

    //  if(moves==9){
    //     console.log("match is drawn");
    //}
     
    
};



};

boxes.forEach((box) => {
    move = 0;
    box.addEventListener("click", ()=>{
        move ++;
        console.log(move);
        console.log("box was clicked");
        if(turnO){
               box.innerText = "O";
               turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
         box.disabled = true;
         checkWinner();
         if(move==9){
            msg.innerText = "Match Drawn";
            move = 0;
         }
    });
});




newGameBtn.addEventListener("click",() => {
    move = 0;
    turnO =true;
    enableBoxes();
    msg.innerText= "Winner: ";
});

resetBtn.addEventListener("click", () => {
    move = 0;
    turnO= true;
    msg.innerText="Winner: ";
    enableBoxes();

});