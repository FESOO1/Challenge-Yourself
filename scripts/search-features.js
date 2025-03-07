// SEARCH
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

// SHOWING THE REMOVE THE CHARACTERS BUTTON AS SOON AS AN INPUT IS ENTERED
searchInput.addEventListener('input', e => {
    if (e.target.value.length > 0) {
        searchButton.classList.add('main-search-input-button-shown');
    } else {
        searchButton.classList.remove('main-search-input-button-shown');
    };
});

// REMOVE ALL THE CHARACTERS
searchButton.addEventListener('click', () => {
    searchInput.value = '';
    searchButton.classList.remove('main-search-input-button-shown');
});