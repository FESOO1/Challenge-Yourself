// SEARCH
const searchInput = document.querySelector('#searchInput');
const searchCharacterRemoveButton = document.querySelector('#searchCharacterRemoveButton');

// SHOWING THE REMOVE THE CHARACTERS BUTTON AS SOON AS AN INPUT IS ENTERED
searchInput.addEventListener('input', e => {
    if (e.target.value.length > 0) {
        searchCharacterRemoveButton.classList.add('main-search-input-button-shown');
    } else {
        searchCharacterRemoveButton.classList.remove('main-search-input-button-shown');
    };
});

// REMOVE ALL THE CHARACTERS
searchCharacterRemoveButton.addEventListener('click', () => {
    searchInput.value = '';
    searchCharacterRemoveButton.classList.remove('main-search-input-button-shown');
    retrievingTheData();
});