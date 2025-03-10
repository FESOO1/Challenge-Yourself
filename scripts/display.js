const outputContainer = document.querySelector('.main-output');

// FILTER
const filterInput = document.querySelectorAll('.main-filter-drop-down-input-itself');
let filter = [];
let filterId = [];

// RETRIEVING THE DATA

async function retrievingTheData() {
    try {
        const response = await fetch('../challenges-data/challenges-data.json');

        if (!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        filteringTheData(data);
    }
    catch(error) {
        console.error(error);
    };
};

retrievingTheData();

// FILTERING THE DATA

function filteringTheData(challengesData) {
    const filteredObject = challengesData.filter(challengeData => {
        // LANGUAGES
        const languages = challengeData.languages;
        for (const language of languages) {
            if (filter.includes(language)) {
                if (!filterId.includes(challengeData.id)) {
                    filterId.push(challengeData.id);
                };
            };
        };

        // LEVEL
        if (filter.includes(challengeData.level)) {
            if (!filterId.includes(challengeData.id)) {
                filterId.push(challengeData.id);
            };
        };

        // TECHNOLOGIES
        const technologies = challengeData.technologies;
        for (const technology of technologies) {
            if (filter.includes(technology)) {
                if (!filterId.includes(challengeData.id)) {
                    filterId.push(challengeData.id);
                };
            };
        };
    });

    const filteredChallenge = challengesData.filter(challengeData => filterId.includes(challengeData.id));

    const beingFiltered = filter.length > 0 ? filteredChallenge : challengesData;

    const inputOutput = beingFiltered.filter(challengeData => {
        const inputValue = searchInput.value.toLowerCase();
        const challengeDataName = challengeData.name.toLowerCase();

        if (challengeDataName.includes(inputValue)) {
            return challengeData;
        };
    });

    const filteredChallengesData = searchInput.value.length > 0 ? inputOutput : beingFiltered;

    displayTheChallenges(filteredChallengesData);
};

for (let i = 0; i < filterInput.length; i++) {
    filterInput[i].addEventListener('click', () => {
        if (filterInput[i].checked === true) {
            filter.push(filterInput[i].value);
        } else {
            const beingUncheckedInput = filter.indexOf(filterInput[i].value);
            filter.splice(beingUncheckedInput, 1);
        };

        // UPDATING THE CONTENT
        retrievingTheData();

        // EMPTYING THE FILTER ID
        filterId = [];
    });
};

// DISPLAY THE CHALLENGES

function displayTheChallenges(challengesData) {
    outputContainer.innerHTML = '';

    for (const challengeData of challengesData) {
        // OUTPUT ITSELF
        const outputItself = document.createElement('a');
        outputItself.href = './pages/challenge-showcase.html';
        outputItself.classList.add('main-output-itself');

        // SAVING THE ID INTO LOCAL STORAGE
        outputItself.addEventListener('click', () => localStorage.setItem('challengeID', challengeData.id));

        // OUTPUT ITSELF IMAGE
        const outputItselfImage = document.createElement('div');
        outputItselfImage.classList.add('main-output-itself-image');
        const outputItselfImageItself = document.createElement('img');
        outputItselfImageItself.classList.add('main-output-itself-image-itself');
        outputItselfImageItself.src = challengeData.thumbnail;
        outputItselfImageItself.alt = `${challengeData.name}'s thumbnail`;

        // OUTPUT ITSELF IMAGE BORDERS
        const outputItselfImageBorders = document.createElement('div');
        outputItselfImageBorders.classList.add('main-output-itself-image-borders');
        const outputItselfImageBorderTopLeft = document.createElement('div');
        outputItselfImageBorderTopLeft.classList.add('main-output-itself-image-border-top-left');
        const outputItselfImageBorderTopRight = document.createElement('div');
        outputItselfImageBorderTopRight.classList.add('main-output-itself-image-border-top-right');
        const outputItselfImageBorderBottomLeft = document.createElement('div');
        outputItselfImageBorderBottomLeft.classList.add('main-output-itself-image-border-bottom-left');
        const outputItselfImageBorderBottomRight = document.createElement('div');
        outputItselfImageBorderBottomRight.classList.add('main-output-itself-image-border-bottom-right');

        // OUTPUT ITSELF IMAGE BORDERS - APPENDING
        outputItselfImageBorders.appendChild(outputItselfImageBorderTopLeft);
        outputItselfImageBorders.appendChild(outputItselfImageBorderTopRight);
        outputItselfImageBorders.appendChild(outputItselfImageBorderBottomLeft);
        outputItselfImageBorders.appendChild(outputItselfImageBorderBottomRight);

        // OUTPUT ITSELF IMAGE - APPENDING
        outputItselfImage.appendChild(outputItselfImageItself);
        outputItselfImage.appendChild(outputItselfImageBorders);

        // OUTPUT ITSELF INFORMATION
        const outputItselfInformation = document.createElement('div');
        outputItselfInformation.classList.add('main-output-itself-information');

        // OUTPUT ITSELF INFORMATION HEADER
        const outputItselfInformationHeader = document.createElement('div');
        outputItselfInformationHeader.classList.add('main-output-itself-information-header');
        const outputItselfInformationHeaderName = document.createElement('h3');
        outputItselfInformationHeaderName.classList.add('main-output-itself-information-header-itself');
        outputItselfInformationHeaderName.textContent = challengeData.name;
        const outputItselfInformationHeaderLevel = document.createElement('p');
        outputItselfInformationHeaderLevel.classList.add('main-output-itself-information-header-level');
        outputItselfInformationHeaderLevel.textContent = challengeData.level;

        // OUTPUT ITSELF INFORMATION MORE
        const outputItselfInformationMore = document.createElement('div');
        outputItselfInformationMore.classList.add('main-output-itself-information-more');
        
        // LANGUAGES
        const outputItselfInformationMoreParagraphLanguages = document.createElement('p');
        outputItselfInformationMoreParagraphLanguages.classList.add('main-output-itself-information-more-paragraph');
        outputItselfInformationMoreParagraphLanguages.textContent = 'Languages: ';
        const languages = challengeData.languages;
        for (const language of languages) {
            if (language === languages[languages.length - 1]) {
                outputItselfInformationMoreParagraphLanguages.textContent += ` ${language}`;
            } else {
                outputItselfInformationMoreParagraphLanguages.textContent += ` ${language},`;
            };
        };
        outputItselfInformationMore.appendChild(outputItselfInformationMoreParagraphLanguages);

        // TECHNOLOGIES
        if (challengeData.technologies.length > 0) {
            const outputItselfInformationMoreParagraphTechnologies = document.createElement('p');
            outputItselfInformationMoreParagraphTechnologies.classList.add('main-output-itself-information-more-paragraph');
            outputItselfInformationMoreParagraphTechnologies.textContent = 'Technologies: ';
            const technologies = challengeData.technologies;
            for (const technology of technologies) {
                if (technology === technologies[technologies.length - 1]) {
                    outputItselfInformationMoreParagraphTechnologies.textContent += ` ${technology}`;
                } else {
                    outputItselfInformationMoreParagraphTechnologies.textContent += ` ${technology},`;
                };
            };
            outputItselfInformationMore.appendChild(outputItselfInformationMoreParagraphTechnologies);
        };

        // OUTPUT ITSELF INFORMATION HEADER - APPENDING
        outputItselfInformationHeader.appendChild(outputItselfInformationHeaderName);
        outputItselfInformationHeader.appendChild(outputItselfInformationHeaderLevel);

        // OUTPUT ITSELF INFORMATION - APPENDING
        outputItselfInformation.appendChild(outputItselfInformationHeader);
        outputItselfInformation.appendChild(outputItselfInformationMore);

        // OUTPUT ITSELF - APPENDING
        outputItself.appendChild(outputItselfImage);
        outputItself.appendChild(outputItselfInformation);

        // APPENDING THE OUTPUT ITSELF TO OUTPUTS CONTAINER
        outputContainer.appendChild(outputItself);
    };
};

// INITIALIZING BUTTONS
searchInput.addEventListener('input', retrievingTheData);