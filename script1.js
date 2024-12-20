const form= document.getElementById('form');
const email= document.getElementById('input-email');
const password= document.getElementById('input-password');

form.addEventListener('submit', e=>{
   e.preventDefault();

   validatInputs();
});

const setError= (element, message)=>{
const inputControl = element.parentElement;
const errorDisplay= inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');

}

let setSuccess= (element) =>{
   const inputControl = element.parentElement;
   const errorDisplay= inputControl.querySelector('.error');
   errorDisplay.innerText = '';
   inputControl.classList.add('success');
   inputControl.classList.remove('error');
} 

const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

let count1 =0;
let count2=0;

const validatInputs= ()=>{
   const emailValue= email.value.trim();
   const passwordValue=  password.value.trim();

   if(emailValue===''){
   setError(email,"UserName is Required");
   }
   else if(!isValidEmail(emailValue)){
   setError(email,"Please provide a valid email address");
   }
   else{
   setSuccess(email);
   count1=1;
   }

   if(passwordValue===''){
      setError(password,"Password is required");
   }
   else if(passwordValue.length< 8){
      setError(password,"Please provide a valid password");
      return;
   }
   else{
      setSuccess(password);
      count2=1;
   }

   if(count1===1 && count2===1){
      window.location.replace(
         "index.html",
       );
   }

};

console.log('home');