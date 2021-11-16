
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

form.addEventListener('submit', function(e){
    
    //stop page from reloading on submit
    e.preventDefault();
    //check if username is empty 
    if( username.value === ''){
        showError(username,'Username is required');
    } else{
        ShowSuccess(username);
        }

        //check if email input is empty 
    if( email.value === ''){
        showError(email,'email is required');
    } else{
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
