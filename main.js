const back=document.getElementById('toggleBack');
const ball=document.getElementById('toggleBall');
const basic=document.getElementById('basic');
const standard=document.getElementById('standard');
const premium=document.getElementById('premium');
const save=document.getElementById('save');
const displayName=document.getElementById('nameDisplay')

const userName=localStorage.getItem('userName');
if(userName){
    displayName.textContent=userName
}


function toggleBall(){
    ball.classList.toggle('animation');
   
    back.style.backgroundColor= ball.classList.contains("animation")?"rgb(125, 187, 31)" :"rgb(158, 153, 153)";
    save.style.display= ball.classList.contains("animation")?"block" :"none";
    basic.textContent=ball.classList.contains("animation")?"$100/Year" :"$10/Month";
    standard.textContent=ball.classList.contains("animation")?"$550/Year" :"$50/Month";
    premium.textContent=ball.classList.contains("animation")?"$1100/Year" :"$100/Month";
    
}   

ball,back.addEventListener('click',toggleBall);

const sidebarButton=document.getElementById('sidebarButton');
const aside=document.getElementById('aside')
sidebarButton.addEventListener('click',()=>{
    aside.classList.toggle('display')
})






