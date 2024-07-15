let userScore=0;
let compScore=0;
let choises=document.querySelectorAll(".contain");
const x=document.querySelector("#you");
const y=document.querySelector("#comp");
const msg=document.querySelector(".msg");
const cC=()=>{
    const options=["rock","paper","scissor"];
    let a=Math.floor(Math.random()*3);
    return options[a];
}
const playGame=(uC)=>{
    let a=cC();
    if((uC==="scissor"&&a==="paper")||(uC==="paper"&&a==="stone")||(uC==="stone"&&a==="scissor")){
        userScore+=1;
        x.innerText=userScore;
        msg.innerText="You won the score";
        msg.style.backgroundColor="green";
    }
    else if(uC===a){
        msg.innerText="There is a draw";
        msg.style.backgroundColor="yellow";
    }
    else{
        compScore+=1;
        y.innerText=compScore;
        msg.innerText="Opponent won the score"
        msg.style.backgroundColor="red";
    }
    

}
choises.forEach((val)=>{
    val.addEventListener("click",()=>{
        const uC=val.getAttribute("id");
        playGame(uC);
    });
});