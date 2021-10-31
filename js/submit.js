import {modal} from './modal.js'

// Get the elements of the form
const submitBtn = document.querySelector('#submit').value;
const form = document.querySelector('#form');
// console.log(form)

let asst = localStorage.getItem('ASSIST');
// console.log(asst);

const checkLocalStorage = (e) => {
    if(e !== ''){
        let x = JSON.parse(e);
        // console.log(x)
        return x;
    } else{
        let z = [];
        return z;
    }
}

// null check for the local storage
if(asst == null){
    localStorage.setItem('ASSIST','');
}

let arr = checkLocalStorage(asst)

const handleAdd = (person) => {
    arr.push(person);
    localStorage.setItem('ASSIST', JSON.stringify(arr));
}

let x ={};

const logSubmit = (e) => {
    e.preventDefault();
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let country = document.querySelector('#country').value;
    let phone = document.querySelector('#phone').value;
    let position = document.querySelector('#position').value;
    // console.log(fname, lname, email, country, phone, position)
    x = {
        name: fname,
        lastname: lname,
        email: email,
        country: country,
        number: phone,
        position: position
    }
    // console.log(x)
    
    handleAdd(x)
    modal.style.display = "block";
    return console.log(x);
  }

form.addEventListener('submit',logSubmit)

export {form}