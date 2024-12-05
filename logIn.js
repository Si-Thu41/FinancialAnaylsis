const button=document.getElementById('submit');
const errorMessage=document.getElementById('errorMessage');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

const form=document.getElementById('form');

try{
    cpassword.addEventListener('input',validation);
email.addEventListener('input',validation);
}
catch(error){
    console.error(error)
}

function validation(){
    if(cpassword.value==password.value && email.value.endsWith('@gmail.com')){
        errorMessage.textContent="";
        button.disabled=false;
    }
    else{
        button.disabled=true;
        errorMessage.textContent="Please check your password or email."
    }
} 

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const userName=document.getElementById('userName').value;
    localStorage.setItem("userName",userName);
    window.location.href="home.html";
})

   

