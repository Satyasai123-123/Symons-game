let gameSeq=[];
let userSeq=[];
let start=false;
let btns=["red","yellow","cream","blue"];
let level=0;
let highScore=0;
let h3=document.querySelector("h3");
let high=document.querySelector(".high");
document.addEventListener("keypress",function(){
        if(start==false){
                console.log("game started");
                start=true;
                 levelUp();               
        }
       
       

});
function levelUp(){
        userSeq=[];
        level++;
        h3.innerText=`Level ${level}`;
        let ranIdx=Math.floor(Math.random()*3);
        let ranColor=btns[ranIdx];
        let ranBtn=document.querySelector(`.${ranColor}`);
        gameSeq.push(ranColor);
        console.log(gameSeq);
        btnFlash(ranBtn);
}
function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
                btn.classList.remove("flash");
        },250);

}
function userBtn(){
        let btn=this;
        btnFlash(btn);
        let userColor=btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
}
let userBtns=document.querySelectorAll(".btn");
for(btn of userBtns){
        btn.addEventListener("click",userBtn);
}
function checkAns(idx){
        if(userSeq[idx]===gameSeq[idx]){
                if(userSeq.length===gameSeq.length){
                        setTimeout(levelUp,1000);
                }
                
        }
        else{
                h3.innerHTML=`Game Over.Your score was <b>${level}<br>Press any key to start<br>`;
                document.querySelector("body").style.backgroundColor="red";
                setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
                },50);
                if(level>highScore){
                        highScore=level;
                }
                high.innerHTML=`Highest score:${highScore}`;
                reset();
        }


}
function reset(){
        start=false;
        level=0;
        gameSeq=[];
        userSeq=[];
}
high.innerHTML=`Highest score:${highScore}`;

