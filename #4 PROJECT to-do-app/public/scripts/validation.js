'use strict';

// Container
const form = document.querySelector('.main-form');
// Inputs
const inputTitle = document.querySelector('#title')
const inputDesc = document.querySelector('#description')
const checkMain = document.querySelector('#main')
const checkWork = document.querySelector('#work')
// Buttons
const btnSub = document.querySelector('.btn-submit');

console.log(form.action)

function validate(){
    let validate, valInp, valdesc, valChk;
    valChk = valInp = valdesc = false;

    if (inputTitle.value.length < 16 && inputTitle.value.length !== 0){
        valInp = true;
    } else{
        alert('Title must be less than 16 or must not be empty')
    }

    if (inputDesc.value.trim() !== ''){
        valdesc = true
    }else {
        alert('Please fill description')
    }

    if(checkMain.checked || checkWork.checked){
        valChk = true
    } else {
        alert('Please choose any todo type')
    }


    validate = valInp && valdesc && valChk
    return validate   
}

btnSub.addEventListener('click', (e)=>{
    const checked = validate();
    if(checked){
        form.submit();
    }
})