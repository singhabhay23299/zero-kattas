let boxes=document.querySelectorAll(".box");

let resetbutton=document.querySelector("#resetbtn");
  
let messagecontainer=document.querySelector(".msg-container")

let message=document.querySelector("#message")
let  newgame=document.querySelector(".newgame")

turn=true;



const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2],

];
     


const resetGame=()=>{
    turn=true;
    enablebox();
    messagecontainer.classList.add("hide");
  };





boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turn) {
            box.innerText = "O";
            turn=false;
        }
        else {
            box.innerText = "X";
            turn=true;
        }   
        box.disabled=true;
        checkWinner();
        

    });
});


 const checkWinner = ()=>{
    for( const pattern of  winPatterns)
    {
       // console.log("answer");
    
        const pos1=boxes[pattern[0]].innerText;
        const pos2=boxes[pattern[1]].innerText;
        const pos3=boxes[pattern[2]].innerText;
        console.log("ans");
        
      if(pos1!=""&& pos2!=""&& pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            
            console.log("winner",pos1)
            shoWinner(pos1);
      }      
    }


    }

};
const shoWinner=(winner)=>{
    message.innerHTML=`congratulations ,winner is ${winner} `
    messagecontainer.classList.remove("hide")
    disablebox();
   

};

let disablebox=()=>{
    for (let box of boxes){

    
    box.disabled=true;}
}


let enablebox=()=>{
    for (let bo of boxes){


    bo.disabled=false;
    bo.innerText="";}
}


newgame.addEventListener("click",resetGame)
resetbutton.addEventListener("click",resetGame)