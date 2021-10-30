// Get the modal
const modal = document.querySelector('.modal');
// console.log(document.querySelector('.gifImgModal').src)

// Get the <span> element that closes the modal
const span = document.querySelector('.closeBtn');

// When the user clicks on <span> (x), close the modal by changing the display setup to none
span.addEventListener('click', ()=>{
    modal.style.display = "none";
})