// FILTER
const filterButton = document.querySelector('.main-filter-itself');
const filterDropDownContainer = document.querySelector('.main-filter-drop-down');
let isFilterDropDownContainerDropped = false;

// DISPLAY AND HIDE THE FILTER DROP DOWN CONTAINER

function displayAndHideTheFilterDropDownContainer(e) {
    e.stopPropagation();

    if (isFilterDropDownContainerDropped === false) {
        filterButton.classList.add('main-filter-itself-active');
        filterDropDownContainer.classList.add('main-filter-drop-down-active');
        
        isFilterDropDownContainerDropped = true;
    } else {
        filterButton.classList.remove('main-filter-itself-active');
        filterDropDownContainer.classList.remove('main-filter-drop-down-active');
        
        isFilterDropDownContainerDropped = false;
    };
};

filterDropDownContainer.addEventListener('click', e => {
    e.stopPropagation();
});

window.addEventListener('click', () =>{
    filterButton.classList.remove('main-filter-itself-active');
    filterDropDownContainer.classList.remove('main-filter-drop-down-active');
    
    isFilterDropDownContainerDropped = false;
});

// INITIALIZE BUTTONS
filterButton.addEventListener('click', displayAndHideTheFilterDropDownContainer);