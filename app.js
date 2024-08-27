let gameSeq =[];
let userSeq =[];
let started =false;
let btns=["yellow","green","purple","red"];
let lavel =0;
let h2 =document.querySelector("h2");
let audio =document.querySelector("audio");

document.addEventListener("keypress",()=>{
  if(started ==false){
    console.log("game is started ")
    started =true;
    levelUp();      
  }
});
function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(()=>{
    btn.classList.remove("flash")
   },250);
}
function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(()=>{
    btn.classList.remove("userFlash")
   },250);
}
function levelUp(){
  userSeq =[];
    lavel ++;
    h2.innerText=`LEVEL ${lavel}`;
    let randomInx =Math.floor(Math.random()*3);
    let randomColor =btns[randomInx];
    let rendomBtn =document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
    gameFlash(rendomBtn);
}
 
function checkAns(idx){
  // console.log("current level :" ,lavel);

  if(userSeq[idx]=== gameSeq[idx]){
if(userSeq.length == gameSeq.length){
setTimeout(()=>{
  levelUp();
},1000);
}
  }else{
    h2.innerHTML=`game over your score was <b> ${lavel} </b> <br> press any key start`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(()=>{
      
      document.querySelector("body").style.backgroundColor ="white";
    },200)
    reset();
  }
}

function btnPress(){
  console.log(this)
    let btn =this;
    userFlash(btn);
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}
let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" ,btnPress)
}
function reset(){
  started =false;
  gameSeq =[];
  lavel =0;
}