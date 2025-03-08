const headerChallengeName = document.querySelector('#headerChallengeName');
const mainChallengeName = document.querySelector('#mainChallengeName');
const mainChallengeNameContainer = document.querySelector('.main-itself-challenge-name');
const descriptionText = document.querySelector('#descriptionText');
const featuresContainer = document.querySelector('.main-itself-challenge-information-left-inner-ul');
const visualsContainer = document.querySelector('#visualsContainer');

const livePreviewAnchor = document.querySelector('#livePreviewAnchor');
const sourceCodeAnchor = document.querySelector('#sourceCodeAnchor');

// RETRIEVING THE DATA

async function retrievingTheData() {
    try {
        const response = await fetch('../challenges-data/challenges-data.json');

        if (!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        displayTheOpenedChallenge(data);
    }
    catch(error) {
        console.error(error);
    };
};

retrievingTheData();

// DISPLAY THE OPENED CHALLENGE

function displayTheOpenedChallenge(challengesData) {
    const challengeID = Number(localStorage.getItem('challengeID'));
    const challengeData = challengesData.filter(challengeData => challengeData.id === challengeID);

    // USING THE CHALLENGE DATA TO DISPLAY THE CORRECT DATA


    // HEADERS
    headerChallengeName.textContent = challengeData[0].name;
    mainChallengeName.textContent = challengeData[0].name;

    // MAIN NAME BG
    mainChallengeNameContainer.style.background = `url(${challengeData[0].thumbnail})`;
    mainChallengeNameContainer.style.backgroundSize = 'cover';
    mainChallengeNameContainer.style.backgroundPosition = 'top';

    // DESCRIPTION
    descriptionText.textContent = challengeData[0].description;

    // FEATURES
    for (let i = 0; i < challengeData[0].features.featuresName.length; i++) {
        const featureText = document.createElement('li');
        featureText.classList.add('main-itself-challenge-information-left-inner-ul-item');
        featureText.innerHTML = `<span>${challengeData[0].features.featuresName[i]}</span> - ${challengeData[0].features.featuresContext[i]}`;

        featuresContainer.appendChild(featureText);
    };

    // VISUALS
    const visuals = challengeData[0].showcasePhotos;
    for (const visual of visuals) {
        const visualItself = document.createElement('img');
        visualItself.classList.add('main-itself-challenge-information-left-inner-image');
        visualItself.alt = `${challengeData[0].name}' picture`;
        visualItself.src = visual;
        visualItself.loading = 'lazy';

        visualsContainer.appendChild(visualItself);
    };
};