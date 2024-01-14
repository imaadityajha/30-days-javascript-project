let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError =document.getElementById('submit-error');


function validateName(){
    let name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = 'write full name'; 
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits'
        return false;
    }
    if(!phone.match(/^\d{10}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;
    }

    phoneError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = 'Enter valid email id';
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 30;
    let left = required - message.length;

    if(left >0){
        messageError.innerHTML = left + " more character required";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm(){
 if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.innerHTML = 'Please fix error to Submit';
    submitError.style.display ="block";
    setTimeout(() => {
        submitError.style.display = "none";
    }, 3000);
    return false;
 }
}