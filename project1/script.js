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

        // function to check email is valid

        function isValidEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
   //function check required
   function checkRequired(inputArray){
       inputArray.array.forEach(function(input) {
          if(input.value ===''){
              console.log( input.id);
              showError(input,`${getFieldId(input)} is required`)
          } else {
              ShowSuccess(input);
          
       });
   }  
       
       //function to get id of the input field with proper

       function getFieldId(input){
           return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
       }




//create event listner for submit button 
form.addEventListener('submit', function(e) {
    
    //stop page from reloading on submit
    e.preventDefault();
    checkRequired([username,email,password,password2]);

})