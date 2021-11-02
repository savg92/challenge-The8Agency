import {form} from './submit.js'

// Get the modal
const modal = document.querySelector('.modal');
// console.log(document.querySelector('.gifImgModal').src)

// Get the <span> element that closes the modal
const xBtn = document.querySelector('.closeBtn');

// When the user clicks on <spantn> (x), close the modal by changing the display setup to none
xBtn.addEventListener('click', ()=>{
    modal.style.display = "none";
    form.reset();
    // location.reload();
})

export {modal}