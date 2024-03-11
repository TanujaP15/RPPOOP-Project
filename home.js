const searchSection = document.querySelector('.search-section');
const selectLocation = document.querySelector('.search-l0ction');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelector('.options li');

selectLocation.addEventListener('click', function(){
    searchSection.classList.toggle('active');
}) 