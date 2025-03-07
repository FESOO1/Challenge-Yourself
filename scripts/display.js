const outputContainer = document.querySelector('.main-output');

// RETRIEVING THE DATA

async function retrievingTheData() {
    try {
        const response = await fetch('../challenges-data/challenges-data.json');

        if (!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        
    }
    catch(error) {
        console.error(error);
    };
};

retrievingTheData();