//Retreving HTML from DOM 

const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('passwrord'); 
const password2 = document.getElementById('passwrord2');
 
//function to update class and massage for error
function showError(input ,message){
    //get the parent elemnt of the input field (.form-control) 
    const formControl = input.ParentElement;
    //Replace the class  -add error
    formControl.className = 'form-control error';
    //get small element for the error message
    const small = formControl.querySlector('small');
    //Replace the text for small error using the input message
    small.innerText = message;
}

//function to update class and success

function ShowSuccess(input){
    //get the parent elemnt of the input field (.form-control) 
    const formControl = input.ParentElement;
    //Replace the class  -add success
    formControl.className = 'form-control success';

}

//EventListner
//create event listner for submit button 

form.addEventListener('submit', function(e) {
    
    //stop page from reloading on submit
    e.preventDefault();

    //check to see if field meet required field requirment 
    //check if username is empty 
    if( username.value === ''){
        showError(username,'Username is required');
    
   } else{
        ShowSuccess(username);
        }

        // function to check email is valid

        function isValidEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        //check if email input is empty 
    if( email.value === ''){
        showError(email,'email is required');
    } else if(!isValidEmail(email.value)){
        showError(email,'Email is invalid')
    } else {
    
        ShowSuccess(email);
        }
         //check if password input is empty 
    if( password.value === ''){
        showError(password,'password is required');
    } else{
        ShowSuccess(password);
        }

         //check if confrm password input is empty 
    if( password2.value === ''){
        showError(password2,'confrm password is required');
    } else{
        ShowSuccess(password2);
        }
});
