const form=document.querySelector("#register");
const username=document.getElementById('username')
const mail=document.querySelector("#mail");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validdateInputs();
})
function validdateInputs(){
    const usernameVal =username.value.trim();
    const mailval=mail.value.trim();
    const passval=password.value.trim();
    const cpassval=cpassword.value.trim();

    if(usernameVal===''){
        setError(username,'user name is required')
    }
    else{
        setSuccess(username)
    }
    if(mailval===''){
        setError(mail,'Please,enter thge valid mail id')
    }
    else if(!validateEmail(mailval)){
        setError(mail,'Please,enter the vaild mail id')
    }
    else{
        setSuccess(mail)
    }
    if(passval===''){
        setError(password,'Password must be atleast 8 characters')
    }
    else if(passval.length<8){
        setError(password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(password)
    }
    if(cpassval===''){
         setError(cpassword,'Password must be atleast 8 characters')
    }
    else if(cpassval!=passval){
        setError(cpassword,'Password must be atleast 8 characters')
    }
    else{
         setSuccess(cpassword)
}
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorelement=inputGroup.querySelector('.error')
    errorelement.innerTEXT = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorelement=inputGroup.querySelector(".error")
    errorelement.innerTEXT='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail =(mail)=>{
    return String(mail)
    .toLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )
}
